import { Component, OnInit } from '@angular/core';
import { RoomServices } from 'src/app/services/rooms/rooms.service';
import { Room } from '../../../models/room.model'
import { Router } from '@angular/router';
@Component({
  selector: 'app-room-add',
  templateUrl: './room-add.component.html',
  styleUrls: ['./room-add.component.css']
})
export class RoomAddComponent implements OnInit {
  public room = new Room()

  constructor(private roomService:RoomServices, private router:Router) { }

  ngOnInit(): void {
  }

  save(){
    this.roomService.saveRoom(this.room).subscribe(result=>{
      console.log("room ", result);
      this.router.navigate(['/room-list']);
    })
  }

}
