export class Teacher {
  teacher_no: number;
  name: string;
  phone: string;
  email: string;
  constructor(options: any = {}) {
  
      this.teacher_no = options.teacher_no || null;
      this.name = options.name || '';
      this.phone = options.phone || '';
      this.email = options.email || '';
      
  }
}
