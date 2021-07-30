import {Component, OnInit} from '@angular/core';
import {Student} from "../../model/student";
import {StudentService} from "../../service/student.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  arrStudent!: Student[];
  textSearch = "";

  constructor(private studentService: StudentService, private router: Router) {
    this.studentService.findAll().subscribe(next => {
      console.log(next)
      this.arrStudent = next;
    }, error => {
      alert("Lấy danh sách thất bại")
    }, () => {
      alert("Success")
    });
  }

  ngOnInit(): void {

  }

  showCreate() {
    this.router.navigate(["student/create"]);
  }

  search() {
    this.studentService.search(this.textSearch).subscribe(next => {
      this.arrStudent = next;
    })
  }
}
