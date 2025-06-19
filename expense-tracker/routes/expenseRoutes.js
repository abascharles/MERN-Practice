const express = require("express");
const router = express.Router();
const Expense = require("../models/expense");

//Read all
router.get("/", async (req, res) => {
  const expense = await Expense.find();
  res.send(expense);
});

// Get total expenses by category (aggregation)
router.get("/total-by-category", async (req, res) => {
  try {
    const totalsByCategory = await Expense.aggregate([
      {
        $group: {
          _id: "$category",
          totalAmount: { $sum: "$amount" },
          count: { $sum: 1 },
        },
      },
      {
        $sort: { totalAmount: -1 },
      },
    ]);

    res.status(200).json({ success: true, data: totalsByCategory });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching category totals",
      error: error.message,
    });
  }
});

//Read One
router.get("/:id", async (req, res) => {
  const expense = await Expense.findById(req.params.id);
  if (!expense) return res.status(404).send("Entry not found");
  res.send(expense);
});

//Create
router.post("/", async (req, res) => {
  try {
    const expense = new Expense(req.body);
    await expense.save();
    res.status(200).send(expense);
  } catch (error) {
    res.status(400).send(error);
  }
});

//Update
router.put("/:id", async (req, res) => {
  try {
    const expense = await Expense.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!expense) return res.status(404).send("Entry not found ");
    res.status(200).send(expense);
  } catch (error) {
    res.status(400).send(error);
  }
});

//Delete

router.delete("/:id", async (req, res) => {
  const expense = await Expense.findByIdAndDelete(req.params.id);
  if (!expense) return res.status(404).send("Entry not found ");
  res.send(expense);
});

module.exports = router;
