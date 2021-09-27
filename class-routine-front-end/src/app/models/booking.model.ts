export class Booking {
  booking_no: number;
  assign_no: number;
  room_no: number;
  day: string;
  startDate: string;
  endDate: string;
  teacher_name: string;
  register_student: number;
  teacher_no: number;
  course_no: number;
  semister: string;
  course_name: string;
  room_number: string;
  constructor(options: any = {}) {
      this.booking_no = options.booking_no || null;
      this.room_no = options.room_no || null;
      this.assign_no = options.room_no || null;
      this.day = options.day || "";
      this.startDate = options.startDate || "";
      this.endDate = options.endDate || "";
      this.teacher_name = options.teacher_name || "";
      this.register_student = options.register_student || null;
      this.teacher_no = options.teacher_no || null;
      this.course_no = options.course_no || null;
      this.semister = options.semister || "";
      this.course_name = options.course_name || "";
      this.room_number = options.room_number || "";
      
  }
}
