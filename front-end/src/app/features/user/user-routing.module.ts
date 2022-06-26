
import { Routes, RouterModule } from "@angular/router";
import { UserComponent } from './user.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../../core/guards/auth.guard';
import { CourseListComponent } from './course-list/course-list.component';
import { HomeComponent } from './home/home.component';
import { RoomListComponent } from './room-list/room-list.component';;
import { TeacherComponent } from './teacher/teacher.component';
import { AssigntTeacherComponent } from './assign-teacher/assign-teacher.component';
import { RoomBookingComponent } from './room-booking/room-booking.component';
const routes: Routes = [
  {
    path: '', component: UserComponent,
    children: [
      { path: '', component: HomeComponent },
      // { path: 'room-list',  component: RoomListComponent },
      // { path: 'course-list',  component: CourseListComponent },
      // { path: 'teachers',  component: TeacherComponent },
      // { path: 'assign-teacher',  component: AssigntTeacherComponent },
      // { path: 'room-booking',  component: RoomBookingComponent },
      { path: 'room-list',  canActivate: [AuthGuard], component: RoomListComponent },
      { path: 'course-list',  canActivate: [AuthGuard], component: CourseListComponent },
      { path: 'teachers',  canActivate: [AuthGuard], component: TeacherComponent },
      { path: 'assign-teacher',  canActivate: [AuthGuard], component: AssigntTeacherComponent },
      { path: 'room-booking',  canActivate: [AuthGuard], component: RoomBookingComponent },
    ]
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }