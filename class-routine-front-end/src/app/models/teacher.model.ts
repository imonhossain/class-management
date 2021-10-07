export class Teacher {
  teacher_id: number;
  name: string;
  phone: string;
  email: string;
  constructor(options: any = {}) {
  
      this.teacher_id = options.teacher_id || null;
      this.name = options.name || '';
      this.phone = options.phone || '';
      this.email = options.email || '';
      
  }
}
