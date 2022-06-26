import { Injectable } from '@angular/core';
import { BaseDataService } from '../../services/base-data-service';
import { acConfig } from '../../app.config';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private apiService: BaseDataService) { }

  // Login
  public userLogin(_USERNAME: string, _PASSWORD: string): any {
    // let params = { email: "imon@gmail.com", password: "123456" }
    let params = { email: _USERNAME, password: _PASSWORD }
    return this.apiService.save<any>(`${acConfig.apiUrl}/users/login`, params);
  }

}