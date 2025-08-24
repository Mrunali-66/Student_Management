import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://localhost:5000/api/students';

  constructor(private http: HttpClient) { }

  getStudents(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  addStudent(student: any): Observable<any> {
    return this.http.post(this.apiUrl, student);
  }

  deleteStudent(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}