export class Assign {
  assign_no: number;
  course_no: number;
  course_name: string;
  teacher_name: string;
  register_student: number;
  teacher_no: number;
  semister: string;
  section: string;
  constructor(options: any = {}) {
      this.assign_no = options.assign_no || null;
      this.course_no = options.course_no || null;
      this.course_name = options.course_name || "";
      this.teacher_name = options.teacher_name || "";
      this.register_student = options.register_student || null;
      this.teacher_no = options.teacher_no || null;
      this.semister = options.semister || "";
      this.section = options.section || "";
      
  }
}
