import { Component, OnInit } from '@angular/core';
import { Room } from '../../../models/room.model'
import { RoomServices } from '../../../services/rooms/rooms.service'
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  // public roomList:any =  new Array<Room>();
  public roomList: any = []

  public searchFields: any[] = ['number'];
  public searchString;

  public room: Room = new Room();
  constructor(private roomServices: RoomServices, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllRooms()
  }

  getAllRooms() {
    this.roomServices.getRooms().subscribe(result => {
      this.roomList.length = 0;
      this.roomList = result.data?.map(data => {
        return new Room(data);
      })
      console.log("result, result", result);
    })
  }
  onClickNewRoom(f) {
    this.room = new Room();
    f.resetForm();
  }

  onClickEdit(item, index) {
    this.room = new Room(item);
  }
  onClickDelete(item: Room, index) {
    this.roomServices.deleteRoom(item).subscribe(result => {
      if (result.success == 1) {
        this.toastr.success(result.message, 'Success');
        this.roomList.splice(index, 1);
      } else {
        this.toastr.error(result.message, 'Error');
      }
    })
  }
  onClickSave(f) {
    if (!this.room.room_id) {
      this.roomServices.saveRoom(this.room).subscribe(result => {
        console.log("result", result);
        if (result.success == 1) {
          this.roomList.push(new Room(result.data));
          this.room = new Room();
          this.toastr.success("Save Successfully ", 'Success');
          f.resetForm();
        } else {
          this.toastr.error(result.message, 'Error');
        }
      })
    } else {
      this.roomServices.updateRoom(this.room).subscribe(result => {
        console.log("result", result);
        if (result.success == 1) {
          this.toastr.success("Update Successfully ", 'Success');
          this.getAllRooms();
        } else {
          this.toastr.error(result.message, 'Error');
        }
      })
    }

  }
  onClickUpdate() {
    this.roomServices.updateRoom(this.room).subscribe(result => {
      console.log("result", result);
      this.room = new Room();
    })
  }










}
