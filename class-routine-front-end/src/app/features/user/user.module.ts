import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { StractureModule } from '../structure/stracture.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from '../../core/core.module';
import { TokenInterceptor } from '../../core/interceptors/token-interceptor.service';
import { SpinnerService } from '../../core/services/spinner.service';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { RoomListComponent } from './room-list/room-list.component';
import { CourseListComponent } from "./course-list/course-list.component";
import { HomeComponent } from "./home/home.component";
import { RoomAddComponent } from './room-add/room-add.component';
import { CourseAddComponent } from './course-add/course-add.component';

import { FilterPipe } from '../../core/pipe/filter.pipe';
import { TeacherComponent } from './teacher/teacher.component';
import { SharedModule } from '../../core/shared.module';
import { AssigntTeacherComponent } from './assign-teacher/assign-teacher.component';
import { RoomBookingComponent } from './room-booking/room-booking.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
@NgModule({
  imports: [
    CommonModule,
    StractureModule,
    UserRoutingModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    NgxMaterialTimepickerModule,
  ],
  declarations: [
    UserComponent,
    SubjectListComponent,
    RoomListComponent,
    CourseListComponent,
    HomeComponent,
    RoomAddComponent,
    CourseAddComponent,
    FilterPipe,
    TeacherComponent,
    AssigntTeacherComponent,
    RoomBookingComponent
  ],
  providers: [
    SpinnerService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
})
export class UserModule { }