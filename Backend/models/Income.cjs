const mongoose = require("mongoose");

const IncomeSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", require: true },
    icon: { type: String },
    source: { type: String, require: true }, // Example: Salary, Freelance, etc.
    amount: { type: Number, require: true },
    date: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model("Income", IncomeSchema);