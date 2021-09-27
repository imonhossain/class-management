import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { WebStorageService } from '../../../core/services/web-storage.service';
import { acConfig } from '../../../app.config'

import { AlertService } from '../../../core/popup/service/alert.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  workspace: string;
  username: string;
  password: string;
  public forgetpassword = false;
  public backtologin = false;

  constructor(private dataService: DataService,
    private router: Router,
    private toastr: ToastrService,
    private http: HttpClient,
    private token: WebStorageService,
    ) { }

  ngOnInit() {
    if (this.token.getCookie()) {
      this.router.navigate(['/']);
    }
  }

  atemptLogin() {
    this.dataService.userLogin(this.username, this.password).subscribe(data => {
      console.log("data", data)
      if (data.success == 1) {
        this.token.setCookie()
        this.token.saveToken(data.token);
        let user = {
          name:data.name,
          id:data.id,
          email:data.email,
          role:data.role
        }
        this.token.saveUser(user);
        this.router.navigate(['/']);
        console.log("inner working", data);
        this.toastr.success("Login Successfully ",'Success');
      } else {
        this.toastr.error(data.message,'Error');
      }
    }, err => {
    })
  }
  getYYYYMMDDDashFromDate(date) {
    if (!date) return null;
    try {
      const dateObj = new Date(date);
      const dd = dateObj.getDate();
      const mm = dateObj.getMonth() + 1;
      const yyyy = dateObj.getFullYear().toString();
      let rDd = dd.toString();
      let rMm = mm.toString();
      if (dd < 10) {
        rDd = '0' + dd.toString();
      }
      if (mm < 10) {
        rMm = '0' + mm.toString();
      }
      return yyyy + '-' + rMm + '-' + rDd;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  onClickSave() {


  }


  
 onClickpasswordsend() {
    this.forgetpassword = !this.forgetpassword;
    this.backtologin=false;
  }
 onClickbacktologin() {
    this.backtologin = !this.backtologin;
    this.forgetpassword =false;
  }



}
