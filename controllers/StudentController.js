const Student = require("../models/Student");

// Create
exports.createStudent = async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).json(student);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Read all
exports.getStudents = async (req, res) => {
    const students = await Student.find();
    res.json(students);
};

// Update
exports.updateStudent = async (req, res) => {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(student);
};

// Delete
exports.deleteStudent = async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student deleted" });
};