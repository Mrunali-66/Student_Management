import { Routes } from '@angular/router';
import { StudentComponent } from './component/student/student';

export const appRoutes: Routes = [
  { path: 'students', component: StudentComponent },
  { path: '', redirectTo: 'students', pathMatch: 'full' }
];
