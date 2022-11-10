
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebStorageService } from '../../../core/services/web-storage.service';
import { acConfig } from '../../../app.config'
import { HttpClient } from '@angular/common/http';
import { globalVariables } from 'src/app/core/constants/globalVariables';
import { User } from 'src/app/models/user.model';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  totalCartItem = 0;
  public customerId;
  public customerPictureName;
  public isLoged = false;
  public companyLogoUrl;
  public companyFaviconUrl;
  public user:User = new User();
 

  constructor(
    
    private token: WebStorageService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    if(localStorage.getItem('user') !== null) {
      this.user = new User( JSON.parse(localStorage.getItem('user')) );
    }
    console.log(this.user)

  }
  onCLickLogout(){
    // debugger;
    localStorage.clear();
    this.router.navigate(['/login'])
  }

 
}
