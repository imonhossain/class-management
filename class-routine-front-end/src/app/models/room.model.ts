export class Room {
  room_id: number;
  number: string;
  capacity: number;
  constructor(options: any = {}) {
  
      this.room_id = options.room_id || null;
      this.number = options.number || "";
      this.capacity = options.capacity || null;
      
  }
}
