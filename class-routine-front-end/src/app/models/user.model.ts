export class User {
  id: number;
  name: string;
  role: string;
  email: string;
  constructor(options: any = {}) {
  
      this.id = options.id || null;
      this.name = options.name || '';
      this.role = options.role || '';
      this.email = options.email || '';
      
  }
}
