const mongoose = require("mongoose");

const expenseSchema = new expense.Schema({
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  category: {
    type: String,
    enum: ["food", "transport", "entertainment", "utilities"],
    required: true,
  },
  date: { type: Date, default: Date.now },
  isRecurring: { type: Boolean, default: false },
});

module.exports = mongoose.model("expense", expenseSchema);
