import {Component, Input, OnInit} from '@angular/core';
import {Student} from "../../model/student";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {StudentService} from "../../service/student.service";

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {
  student: any;
  colorText = "red";

  constructor(private activatedRoute: ActivatedRoute, private studentService: StudentService) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      if (id != null) {
        this.student = studentService.findById(parseInt(id));
      }
    })
  }

  ngOnInit(): void {
  }

}
