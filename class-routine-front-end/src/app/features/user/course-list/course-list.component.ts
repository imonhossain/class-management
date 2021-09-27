import { Component, OnInit } from '@angular/core';
import { CourseServices } from '../../../services/courses/courses.service'
import { Course } from '../../../models/course.model'
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  public courseList: any = [
    {
      id: 1,
      course_name: "Mathematics I (Differential Calculus & Integral 3 Calculus)",
      course_code: "MATH 1101",
      course_credit: 3
    },
    {
      id: 2,
      course_name: "English II (Advanced)",
      course_code: "ENG 1204",
      course_credit: 3
    },
  ]
  // public courseList:any =  new Array<Course>();
  constructor(private courseServices: CourseServices, private toastr: ToastrService) { }

  public searchFields: any[] = ['course_name', 'course_code'];
  public searchString;

  public course: Course = new Course();

  ngOnInit(): void {
    this.getAllCourses()
  }

  getAllCourses() {
    this.courseServices.getCourses().subscribe(result => {
      this.courseList.length = 0;
      this.courseList = result.data?.map(data => {
        return new Course(data);
      })
    })
  }
  onClickNewCourse(f) {
    this.course = new Course();
    f.resetForm();
  }

  onClickEdit(item, index) {
    this.course = new Course(item);
  }
  onClickDelete(item: Course, index) {
    this.courseServices.deleteCourse(item).subscribe(result => {
      if (result.success == 1) {
        this.toastr.success(result.message, 'Success');
        this.courseList.splice(index, 1);
      } else {
        this.toastr.error(result.message, 'Error');
      }
    })
  }
  onClickSave(f) {
    if (!this.course.course_no) {
      this.courseServices.saveCourse(this.course).subscribe(result => {
        console.log("result", result);
        if (result.success == 1) {
          this.courseList.push(new Course(result.data));
          this.course = new Course();
          this.toastr.success("Save Successfully ", 'Success');
          f.resetForm();
        } else {
          this.toastr.error(result.message, 'Error');
        }
      })
    } else {
      this.courseServices.updateCourse(this.course).subscribe(result => {
        console.log("result", result);
        if (result.success == 1) {
          this.toastr.success("Update Successfully ", 'Success');
          this.getAllCourses();
        } else {
          this.toastr.error(result.message, 'Error');
        }
      })
    }

  }
  onClickUpdate() {
    this.courseServices.updateCourse(this.course).subscribe(result => {
      console.log("result", result);
      this.course = new Course();
    })
  }

}
