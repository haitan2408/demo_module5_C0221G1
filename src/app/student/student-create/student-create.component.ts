import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Student} from "../../model/student";
import {AbstractControl, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {StudentService} from "../../service/student.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  student!: Student;
  @Output() submitCreateStudent = new EventEmitter();
  validate_message ={
    'name': [
      {type: "required", message: "Name không được để trống"},
      {type: 'minlength', message: "Name phải có ít nhất 4 kí tự."}
    ],
    'id' : [
      {}
    ],
    'point': [
      {type: 'invalid0', message: ' Điểm không được dưới 4'}
    ]

  }
  public studentForm: FormGroup;

  constructor(private studentService: StudentService, private router: Router) {
    this.studentForm = new FormGroup({
      name: new FormControl("", [Validators.required,Validators.minLength(4)]),
      id: new FormControl("", [Validators.required]),
      dateOfBirth: new FormControl("", [Validators.required]),
      point: new FormControl("", [Validators.required, this.validatePoint0])
    })
  }
  validatePoint0(point: AbstractControl) {
    let valuePoint = point.value;
    if(valuePoint <=0) {
      return {'invalid0': true}
    } else {
      return null;
    }
  }

  ngOnInit(): void {
  }

  //tạo mới bằng template driven form

  // createStudent(registerForm: NgForm) {
  //   console.log(registerForm)
  //   if(registerForm.valid) {
  //     this.submitCreateStudent.emit(registerForm.value);
  //   } else {
  //     alert("Form không thõa mãn điều kiện")
  //   }
  //
  // }

  //Tạo student với reactive form
  createStudent() {
    console.log(this.studentForm)
    if(this.studentForm.valid) {
      this.studentService.createStudent(this.studentForm.value).subscribe();
      this.router.navigateByUrl("/student/list")
    } else {
      alert("Form không thõa mãn điều kiện")
    }

  }
}
