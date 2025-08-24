
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { provideHttpClient } from '@angular/common/http';
import { StudentComponent } from '../app/component/student/student';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudentComponent],
  template: '<app-student></app-student>',
  //providers: [provideHttpClient()]
})
export class App { }