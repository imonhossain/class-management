export class Booking {
  booking_id: number;
  assign_id: number;
  room_id: number;
  day: string;
  startDate: string;
  endDate: string;
  teacher_name: string;
  register_student: number;
  teacher_id: number;
  course_id: number;
  semister: string;
  course_name: string;
  room_number: string;
  constructor(options: any = {}) {
      this.booking_id = options.booking_id || null;
      this.room_id = options.room_id || null;
      this.assign_id = options.room_id || null;
      this.day = options.day || "";
      this.startDate = options.startDate || "";
      this.endDate = options.endDate || "";
      this.teacher_name = options.teacher_name || "";
      this.register_student = options.register_student || null;
      this.teacher_id = options.teacher_id || null;
      this.course_id = options.course_id || null;
      this.semister = options.semister || "";
      this.course_name = options.course_name || "";
      this.room_number = options.room_number || "";
      
  }
}
