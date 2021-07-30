import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentCreateComponent} from "./student-create/student-create.component";
import {StudentInfoComponent} from "./student-info/student-info.component";
import {StudentListComponent} from "./student-list/student-list.component";
import {StudentComponent} from "./student.component";

const studentRoutes: Routes = [
  {path: "student", component: StudentComponent, children: [
      {path: "create", component: StudentCreateComponent},
      {path: "list", component: StudentListComponent},
      {path: ":id", component: StudentInfoComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(studentRoutes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
