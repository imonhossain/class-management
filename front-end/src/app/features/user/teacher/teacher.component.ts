import { Component, OnInit } from '@angular/core';
import { Teacher } from '../../../models/teacher.model'
import { TeacherServices } from '../../../services/teacher.service'
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  // public teacherList:any =  new Array<Teacher>();
  public teacherList: any = [
   
  ]
  constructor(
    private teacherServices: TeacherServices,
    private toastr: ToastrService
  ) { }

  public searchFields: any[] = ['name', 'phone', 'email'];
  public searchString;

  public teacher: Teacher = new Teacher();

  ngOnInit(): void {
    this.getAllTeachers()
  }

  getAllTeachers() {
    this.teacherServices.getTeachers().subscribe(result => {
      this.teacherList.length = 0;
      this.teacherList = result.data?.map(data => {
        return new Teacher(data);
      })
    })
  }
  onClickNewTeacher(f) {
    this.teacher = new Teacher();
    f.resetForm();
  }

  onClickEdit(item, index) {
    this.teacher = new Teacher(item);
  }
  onClickDelete(item: Teacher, index) {
    this.teacherServices.deleteTeacher(item).subscribe(result => {
      if (result.success == 1) {
        this.toastr.success(result.message, 'Success');
        this.teacherList.splice(index, 1);
      } else {
        this.toastr.error(result.message, 'Error');
      }
    })
  }
  onClickSave(f) {
    if (!this.teacher.teacher_id) {
      this.teacherServices.saveTeacher(this.teacher).subscribe(result => {
        console.log("result", result);
        if (result.success == 1) {
          this.teacherList.push(new Teacher(result.data));
          this.teacher = new Teacher();
          this.toastr.success("Save Successfully ", 'Success');
          f.resetForm();
        } else {
          this.toastr.error(result.message, 'Error');
        }
      })
    } else {
      this.teacherServices.updateTeacher(this.teacher).subscribe(result => {
        console.log("result", result);
        if (result.success == 1) {
          this.toastr.success("Update Successfully ", 'Success');
          this.getAllTeachers();
        } else {
          this.toastr.error(result.message, 'Error');
        }
      })
    }

  }
  onClickUpdate() {
    this.teacherServices.updateTeacher(this.teacher).subscribe(result => {
      console.log("result", result);
      this.teacher = new Teacher();
    })
  }
}
