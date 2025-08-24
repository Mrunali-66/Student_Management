const express = require("express");
const router = express.Router();

const {
    createStudent,
    getStudents,
    updateStudent,
    deleteStudent,
} = require("../controllers/StudentController");

// Define actual routes
router.get("/", getStudents);
router.post("/", createStudent);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;