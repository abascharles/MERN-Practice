const express = require("express");
const router = express.Router();
const expense = require("../model/expense");

//create
router.post("/expense", async (req, res) => {
  try {
    const expens = new expense(req.body);
    await expens.save();
    res.status(200).send(expens);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
