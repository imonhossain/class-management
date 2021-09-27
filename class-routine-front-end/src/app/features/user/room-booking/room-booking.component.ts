import { Component, OnInit } from '@angular/core';
import { Booking } from '../../../models/booking.model'
import { ToastrService } from 'ngx-toastr';
import { Course } from 'src/app/models/course.model';
import { CourseServices } from 'src/app/services/courses/courses.service';
import { TeacherServices } from 'src/app/services/teacher.service';
import { BookingServices } from 'src/app/services/bookings-service';
import { Teacher } from 'src/app/models/teacher.model';
import { Assign } from 'src/app/models/assign.model';
import { AssignServices } from 'src/app/services/assigns.service';
import { RoomServices } from 'src/app/services/rooms/rooms.service';
import { Room } from 'src/app/models/room.model';
@Component({
  selector: 'app-room-booking',
  templateUrl: './room-booking.component.html',
  styleUrls: ['./room-booking.component.css']
})
export class RoomBookingComponent implements OnInit {

  public bookingList:any =  new Array<Booking>();
  public bookingListUnassign:any =  new Array<Assign>();
  public assignList:any =  new Array<Assign>();
  public courseList:any =  new Array<Course>();
  public teacherList:any =  new Array<Teacher>();
  public roomList:any =  new Array<Room>();
  public isBookingList = true;
  constructor(
    private assignServices:AssignServices, 
    private roomServices:RoomServices, 
    private courseServices:CourseServices, 
    private teacherServices:TeacherServices, 
    private bookingServices:BookingServices, 
    private toastr:ToastrService) { }

  public searchFields: any[] = ['course_name'];
  public searchString;

  public booking:Booking = new Booking({startDate:'17:00', endDate:'20:00'});

  public startDate;
  
  ngOnInit(): void {
    this.getAllAssigns();
    this.getAllBookings();
    this.getAllCourses();
    this.getAllTeachers();
    this.getAllRooms();

    const time = new Date();
    time.setHours(14);
    time.setMinutes(0);
    this.startDate = time;
    
  }
  getAllAssigns(){
    this.assignServices.getAssigns().subscribe(result=>{
      this.assignList.length = 0;
      this.assignList = result.data?.map(data=>{
        return new Assign(data);
      })
    })
  }
  
  getAllRooms(){
    this.roomServices.getRooms().subscribe(result=>{
      this.roomList.length = 0;
      this.roomList = result.data?.map(data=>{
        return new Room(data);
      })
    })
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

  getAllBookings(){
    this.bookingServices.getBookings().subscribe(result=>{
      this.bookingList.length = 0;
      this.bookingList = result.data?.map(data=>{
        return new Booking(data);
      })
    })
  }

  getAllBookingsUnassign(){
    this.bookingServices.getBookings().subscribe(result=>{
      this.bookingListUnassign.length = 0;
      this.bookingListUnassign = result.data?.map(data=>{
        return new Assign(data);
      })
    })
  }
  onClickNewBooking(f){
    this.booking = new Booking();
    f.resetForm();
  }

  onClickEdit(item, index){
    this.booking = new Booking(item);
  }
  onClickDelete(item:Booking, index){
    this.bookingServices.deleteBooking(item).subscribe(result =>{
      if(result.success == 1){
        this.toastr.success(result.message,'Success');
        this.bookingList.splice(index, 1);
      }else{
        this.toastr.error(result.message,'Error');
      }
    })
  }
  dateOverlapCheck(startDate, endDate, day, type){
    let overlapObj ={
      isOverlap:false,
      message:""
    }
    startDate = parseInt(startDate.slice(0, 2) + startDate.slice(3)); // 1800
    endDate = parseInt(endDate.slice(0, 2) + endDate.slice(3)); // 2000
    console.log(startDate)
    let count = 0;
    this.bookingList.forEach(element => {
      let st = parseInt(element.startDate.slice(0, 2) + element.startDate.slice(3)); // 1700
      let ed = parseInt(element.endDate.slice(0, 2) + element.endDate.slice(3)); //2000
        // debugger;

      let commonCheck =  ((startDate <= st &&  endDate >= st) || (startDate <= ed &&  endDate >= st)) && (element.day == day);
      if(type == 'room'){
        if( commonCheck && (element.room_no) == this.booking.room_no ){
          // return true;
          count++;
          overlapObj.isOverlap = true;
          overlapObj.message = `Course Name:${element.course_name}, Teacher Name: ${element.teacher_name}`;
        }
      }else if(type == 'semister'){
        if( commonCheck && (element.assign_no) == this.booking.assign_no ){
          // return true;
          count++;
          overlapObj.isOverlap = true;
          overlapObj.message = `Course Name:${element.course_name}, Teacher Name: ${element.teacher_name}`;
        }
      }
      
     

    });
    return overlapObj;
    // if(count){
      
    // }else
    // {
    //   return false;
    // }
  
  }
  onClickSave(f){
    var room = this.roomList.filter(v=>{
      return ((v["room_no"] == this.booking.room_no));
    })
    console.log(room)
    if(this.bookingList?.length){
      // this.toastr.warning("Duplicate value found ",'Warning');
      // return;
      let roomObj = this.dateOverlapCheck(this.booking.startDate, this.booking.endDate, this.booking.day, 'room');
      if(roomObj.isOverlap){
        console.log(" OVerlap");
        this.toastr.warning(roomObj.message,'Room Overlap found');
        return;
      }else{
        console.log("no OVerlap");
      }

    
    

    }

  
    if(!this.booking.booking_no){
      this.bookingServices.saveBooking(this.booking).subscribe(result=>{
        if(result.success == 1){
          this.bookingList.push(new Booking(result.data));
          this.booking = new Booking();
          this.toastr.success("Save Successfully ",'Success');
          f.resetForm();
        }else{
          this.toastr.error(result.message,'Error');
        }
      })
    }else{
      this.bookingServices.updateBooking(this.booking).subscribe(result=>{
        if(result.success == 1){
          this.toastr.success("Update Successfully ",'Success');
          this.getAllBookings();
        }else{
          this.toastr.error(result.message,'Error');
        }
      })
    }
    
  }

  

  getDate(time) {
    var today = new Date('12/12/12');
    var _t = time.split(":");
    today.setHours(_t[0], _t[1], 0, 0);
    console.log("today" ,today)
    return today;
  }

  validate(sTime, eTime) {
    if (+this.getDate(sTime) < +this.getDate(eTime)) {
      var len = this.bookingList.length;
      return len>0?(+this.getDate(this.bookingList[len - 1].endTime) < +this.getDate(sTime) ):true;
    } else {
      return false;
    }
  }

  onClickUpdate(){
    this.bookingServices.updateBooking(this.booking).subscribe(result=>{
      console.log("result", result);
      this.booking = new Booking();
    })
  }

}

/*
  1.list pathabo backend e 
  2.   

*/