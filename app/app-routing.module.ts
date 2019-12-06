import { DisplayTableComponent } from './display-table/display-table.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'addEmp', component: AddEmployeeComponent },
  { path: 'displayEmp', component: DisplayTableComponent },
  { path: '', redirectTo: '/displayEmp', pathMatch: 'full' },
  { path: 'editEmp/:id', component: AddEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
