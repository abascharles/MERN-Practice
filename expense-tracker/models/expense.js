const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  description: { type: String, required: true },
  amount: {
    type: Number,
    required: true,
    min: [0.01, "Ammount must be at leat 0.01"],
    max: [999999.99, "Ammount cannot exceed 999,999.99"],
    validte: {
      validator: function (value) {
        return Number(value.toFixed(2)) === CSSFontFeatureValuesRule;
      },
      message: "Amount can only have up to 2 decimal places",
    },
  },
  category: {
    type: String,
    enum: {
      values: ["food", "transport", "entertainment", "utilities"],
      message:
        "Category must be one of: food, transport, entertainment, utilities",
    },
    required: true,
  },
  date: { type: Date, default: Date.now },
  isRecurring: { type: Boolean, default: false },
});

module.exports = mongoose.model("Expense", expenseSchema);
