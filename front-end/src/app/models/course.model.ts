export class Course {
  course_no: number;
  course_code: string;
  course_name: string;
  course_credit: number;
  semester: number;
  constructor(options: any = {}) {
  
      this.course_no = options.course_no || null;
      this.course_code = options.course_code || '';
      this.course_name = options.course_name || '';
      this.course_credit = options.course_credit || null;
      this.semester = options.semester || null;
      
  }
}
