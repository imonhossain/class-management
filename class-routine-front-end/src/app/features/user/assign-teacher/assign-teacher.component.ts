import { Component, OnInit } from '@angular/core';
import { AssignServices } from '../../../services/assigns.service'
import { Assign } from '../../../models/assign.model'
import { ToastrService } from 'ngx-toastr';
import { Course } from 'src/app/models/course.model';
import { CourseServices } from 'src/app/services/courses/courses.service';
import { TeacherServices } from 'src/app/services/teacher.service';
import { Teacher } from 'src/app/models/teacher.model';

@Component({
  selector: 'app-assign-teacher',
  templateUrl: './assign-teacher.component.html',
  styleUrls: ['./assign-teacher.component.css']
})
export class AssigntTeacherComponent implements OnInit {
  public assignList:any =  new Array<Assign>();
  public courseList:any =  new Array<Course>();
  public teacherList:any =  new Array<Teacher>();
  constructor(
    private assignServices:AssignServices, 
    private courseServices:CourseServices, 
    private teacherServices:TeacherServices, 
    private toastr:ToastrService) { }

  public searchFields: any[] = ['course_name'];
  public searchString;

  public assign:Assign = new Assign();
  
  ngOnInit(): void {
    this.getAllAssigns();
    this.getAllCourses();
    this.getAllTeachers();
  }
  
  getAllCourses(){
    this.courseServices.getCourses().subscribe(result=>{
      this.courseList.length = 0;
      this.courseList = result.data?.map(data=>{
        return new Course(data);
      })
    })
  }
  getAllTeachers(){
    this.teacherServices.getTeachers().subscribe(result=>{
      this.teacherList.length = 0;
      this.teacherList = result.data?.map(data=>{
        return new Teacher(data);
      })
    })
  }

  getAllAssigns(){
    this.assignServices.getAssigns().subscribe(result=>{
      this.assignList.length = 0;
      this.assignList = result.data?.map(data=>{
        // console.log("===", data);
        return new Assign(data);
      })
    })
  }
  onClickNewAssign(f){
    this.assign = new Assign();
    f.resetForm();
  }

  onClickEdit(item, index){
    this.assign = new Assign(item);
  }
  onClickDelete(item:Assign, index){
    this.assignServices.deleteAssign(item).subscribe(result =>{
      if(result.success == 1){
        this.toastr.success(result.message,'Success');
        this.assignList.splice(index, 1);
      }else{
        this.toastr.error(result.message,'Error');
      }
    })
  }
  onClickSave(f){
    // var result = this.assignList.filter(function(v, i) {
    //   return ((v["course_no"] == this.assign.course_no && v["teacher_no"] == this.assign.teacher_no) && v.semister == this.assign.semister );
    // })
    var result = this.assignList.filter(v=>{
      return ((v["course_no"] == this.assign.course_no && v["teacher_no"] == this.assign.teacher_no) && v.semister == this.assign.semister );
    })
    console.log(result)
    if(result?.length){
      this.toastr.warning("Duplicate value found ",'Warning');
      return;
    }
    if(!this.assign.assign_no){
      this.assignServices.saveAssign(this.assign).subscribe(result=>{
        console.log("result", result);
        if(result.success == 1){
          // this.assignList.push(new Assign(result.data));
          this.assign = new Assign();
          let data = result.data;
          this.toastr.success(`Day ${data.day}, Time:${data.startDate} - ${data.endDate} `,'Success',{
            timeOut: 10000,
          });
          // this.toastr.success("Save Successfully ",'Success');
          f.resetForm();
        }else{
          this.toastr.error(result.message,'Error');
        }
      })
    }else{
      this.assignServices.updateAssign(this.assign).subscribe(result=>{
        console.log("result", result);
        if(result.success == 1){
          this.toastr.success("Update Successfully ",'Success');
          this.getAllAssigns();
        }else{
          this.toastr.error(result.message,'Error');
        }
      })
    }
    
  }
  onClickUpdate(){
    this.assignServices.updateAssign(this.assign).subscribe(result=>{
      console.log("result", result);
      this.assign = new Assign();
    })
  }

}
