import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../../services/studentservice';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student.html',
  styleUrls: ['./student.css']
})
export class StudentComponent implements OnInit {
  students: any[] = [];
  newStudent: any = {};

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents() {
    this.studentService.getStudents().subscribe(data => {
      this.students = data;
    });
  }

  addStudent() {
    this.studentService.addStudent(this.newStudent).subscribe(() => {
      this.newStudent = {};
      this.getStudents();
    });
  }

  deleteStudent(id: string) {
    this.studentService.deleteStudent(id).subscribe(() => {
      this.getStudents();
    });
  }
}
