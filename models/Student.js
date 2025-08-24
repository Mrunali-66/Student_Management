const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, min: 18 },
    email: { type: String, unique: true },
    branch: String,
    year: String
});

module.exports = mongoose.model("Student", studentSchema);