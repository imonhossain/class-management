export class Assign {
  assign_id: number;
  course_id: number;
  course_name: string;
  teacher_name: string;
  register_student: number;
  teacher_id: number;
  semister: string;
  section: string;
  constructor(options: any = {}) {
      this.assign_id = options.assign_id || null;
      this.course_id = options.course_id || null;
      this.course_name = options.course_name || "";
      this.teacher_name = options.teacher_name || "";
      this.register_student = options.register_student || null;
      this.teacher_id = options.teacher_id || null;
      this.semister = options.semister || "";
      this.section = options.section || "";
      
  }
}
