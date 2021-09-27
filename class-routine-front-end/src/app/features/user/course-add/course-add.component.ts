import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { CourseServices } from 'src/app/services/courses/courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {
  public course = new Course();
  constructor(private courseService:CourseServices, private router:Router) { }

  ngOnInit(): void {
  }
  save(){
    this.courseService.saveCourse(this.course).subscribe(result=>{
      console.log("save successfully ", result);
      this.router.navigate(['/course-list'])
    })

  }

}
