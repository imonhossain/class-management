export class Room {
  room_no: number;
  number: string;
  capacity: number;
  constructor(options: any = {}) {
  
      this.room_no = options.room_no || null;
      this.number = options.number || "";
      this.capacity = options.capacity || null;
      
  }
}
