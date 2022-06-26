import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public user:User = new User();
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('user') !== null) {
      this.user = new User( JSON.parse(localStorage.getItem('user')) );
    }
  }

}
