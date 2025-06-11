const express = require("express");
const router = express.Router();
const Expense = require("../models/expense");

//create
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
