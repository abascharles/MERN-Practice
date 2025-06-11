Personal Expense Tracker 📊
What you'll practice: CRUD operations, data validation, aggregation

// Schema example
const expenseSchema = new mongoose.Schema({
description: { type: String, required: true },
amount: { type: Number, required: true },
category: { type: String, enum: ['food', 'transport', 'entertainment', 'utilities'], required: true },
date: { type: Date, default: Date.now },
isRecurring: { type: Boolean, default: false }
});
New concepts: Enums, date handling, number validation, aggregation queries (total expenses by category)
