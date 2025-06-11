const express = require("express");
const router = express.Router();
const Expense = require("../models/expense");

//Read all
router.get("/", async (req, res) => {
  const expense = await Expense.find();
  res.send(expense);
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

module.exports = router;
