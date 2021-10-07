import { Component, OnInit } from '@angular/core';
import { BookingServices } from 'src/app/services/bookings-service';
import { Routine } from '../../../models/routine.model'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  routineList = []; 
  public searchFields: any[] = ['course_name'];
  public searchString;
  public mySet = new Set();

  public uniqueRoomList = [];

  public list:any =  new Array<Routine>();


  constructor(private bookingServices:BookingServices) { }

  ngOnInit(): void {
    this.getAllRoutine();
  }

  
  

  getAllRoutine(){
    this.bookingServices.getRotines().subscribe(result=>{
      this.routineList.length = 0;
      this.routineList = result.data;
      result.data.forEach(element => {
        this.mySet.add(element.number);
      });
      this.uniqueRoomList = Array.from(this.mySet); 
      console.log("this.mySet", this.mySet);
      this.uniqueRoomList.forEach(element=>{
        let obj = new Routine();
        obj.room_number = element
        this.routineList.forEach(routine=>{
        
          if(element == routine.number){
            const f = parseInt(routine.startDate.substring(0, 2));
            const l = parseInt(routine.endDate.substring(0, 2));
            let duration = 1
            console.log(f);
            console.log(l);
            if( (l-f) == 2 ){
              duration = 2;
            }
            console.log("duration", duration);
            if(routine.startDate == '08:45:00'){
              obj.hour8 = duration;
              obj.hour8_course = routine.course_name;
              obj.hour8_semister = routine.semister;
              obj.hour8_teacher_name = routine.teacher_name;
            }
            else if(routine.startDate == '09:45:00'){
              obj.hour9 = duration;
              obj.hour9_course = routine.course_name;
              obj.hour9_semister = routine.semister;
              obj.hour9_teacher_name = routine.teacher_name;
            }
            else if(routine.startDate == '10:45:00'){
              obj.hour10 = duration;
              obj.hour10_course = routine.course_name;
              obj.hour10_semister = routine.semister;
              obj.hour10_teacher_name = routine.teacher_name;
            }
            else if(routine.startDate == '11:45:00'){
              obj.hour11 = duration;
              obj.hour11_course = routine.course_name;
              obj.hour11_semister = routine.semister;
              obj.hour11_teacher_name = routine.teacher_name;
            }
  
            else if(routine.startDate == '14:30:00'){
              obj.hour14 = duration;
              obj.hour14_course = routine.course_name;
              obj.hour14_semister = routine.semister;
              obj.hour14_teacher_name = routine.teacher_name;
            }
            else if(routine.startDate == '15:30:00'){
              obj.hour15 = duration;
              obj.hour15_course = routine.course_name;
              obj.hour15_semister = routine.semister;
              obj.hour15_teacher_name = routine.teacher_name;
            }
            else if(routine.startDate == '16:30:00'){
              obj.hour16 = duration;
              obj.hour16_course = routine.course_name;
              obj.hour16_semister = routine.semister;
              obj.hour16_teacher_name = routine.teacher_name;
            }
            else if(routine.startDate == '17:30:00'){
              obj.hour17 = duration;
              obj.hour17_course = routine.course_name;
              obj.hour17_semister = routine.semister;
              obj.hour17_teacher_name = routine.teacher_name;
            }
            else if(routine.startDate == '18:30:00'){
              obj.hour18 = duration;
              obj.hour18_course = routine.course_name;
              obj.hour18_semister = routine.semister;
              obj.hour18_teacher_name = routine.teacher_name;
            }
            else if(routine.startDate == '19:30:00'){
              obj.hour19 = duration;
              obj.hour19_course = routine.course_name;
              obj.hour19_semister = routine.semister;
              obj.hour19_teacher_name = routine.teacher_name;

            }

            


            
          }
        })
        this.list.push(obj)
       
      })
    })
  }

   arr=[
    {
       "number":"609",
       "capacity":78,
       "booking_no":8,
       "day":"Friday",
       "startDate":"08:45:00",
       "endDate":"10:45:00",
       "course_name":"New course",
       "course_no":7,
       "teacher_id":10,
       "semister":"12",
       "assign_no":18,
       "register_student":63,
       "teacher_name":"imon hossain"
    },
    {
       "number":"609",
       "capacity":78,
       "booking_no":11,
       "day":"Friday",
       "startDate":"10:45:00",
       "endDate":"12:45:00",
       "course_name":"Data Structure2",
       "course_no":1,
       "teacher_id":10,
       "semister":"6",
       "assign_no":21,
       "register_student":55,
       "teacher_name":"imon hossain"
    },
    {
       "number":"75",
       "capacity":45,
       "booking_no":15,
       "day":"Friday",
       "startDate":"18:30:00",
       "endDate":"20:30:00",
       "course_name":"Database programming",
       "course_no":6,
       "teacher_id":10,
       "semister":"5",
       "assign_no":25,
       "register_student":45,
       "teacher_name":"imon hossain"
    },
    {
       "number":"75",
       "capacity":45,
       "booking_no":10,
       "day":"Friday",
       "startDate":"14:30:00",
       "endDate":"15:30:00",
       "course_name":"math2",
       "course_no":5,
       "teacher_id":11,
       "semister":"2",
       "assign_no":20,
       "register_student":30,
       "teacher_name":"Taskin Fatema"
    },
    {
       "number":"75",
       "capacity":45,
       "booking_no":13,
       "day":"Friday",
       "startDate":"17:30:00",
       "endDate":"18:30:00",
       "course_name":"math2",
       "course_no":5,
       "teacher_id":11,
       "semister":"10",
       "assign_no":23,
       "register_student":35,
       "teacher_name":"Taskin Fatema"
    },
    {
       "number":"75",
       "capacity":45,
       "booking_no":7,
       "day":"Friday",
       "startDate":"08:45:00",
       "endDate":"10:45:00",
       "course_name":"Database programming",
       "course_no":6,
       "teacher_id":12,
       "semister":"10",
       "assign_no":17,
       "register_student":36,
       "teacher_name":"Sadman Rashik"
    },
    {
       "number":"75",
       "capacity":45,
       "booking_no":9,
       "day":"Friday",
       "startDate":"10:45:00",
       "endDate":"12:45:00",
       "course_name":"Database programming",
       "course_no":6,
       "teacher_id":12,
       "semister":"2",
       "assign_no":19,
       "register_student":25,
       "teacher_name":"Sadman Rashik"
    },
    {
       "number":"75",
       "capacity":45,
       "booking_no":12,
       "day":"Friday",
       "startDate":"15:30:00",
       "endDate":"17:30:00",
       "course_name":"Data Structure2",
       "course_no":1,
       "teacher_id":12,
       "semister":"3",
       "assign_no":22,
       "register_student":25,
       "teacher_name":"Sadman Rashik"
    },
    {
       "number":"609",
       "capacity":78,
       "booking_no":14,
       "day":"Friday",
       "startDate":"14:30:00",
       "endDate":"16:30:00",
       "course_name":"New course",
       "course_no":7,
       "teacher_id":13,
       "semister":"3",
       "assign_no":24,
       "register_student":75,
       "teacher_name":"Ferodus bin Hafiz"
    }
 ]
}
