import { Injectable } from '@angular/core';
import { BaseDataService } from '../base-data-service';
import { acConfig } from '../../app.config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class RoomServices {
    constructor(private apiService: BaseDataService, private http: HttpClient) { }
    public getRooms():Observable<any> {
        return this.apiService.get(`rooms`);
      }

    public saveRoom(params): any {
        return this.apiService.request('POST', `rooms`, params);
    }
    public deleteRoom(params): any {
        return this.apiService.request('DELETE', `rooms`, params);
    }
    public updateRoom(params): any {
        return this.apiService.request('PUT', `rooms`, params);
    }
    // public getRooms(): any {
    //     // return this.apiService.get<>(`${acConfig.apiUrl}/users/login`, params);
    //     return this.http.get(`${acConfig.apiUrl}/rooms`, {
    //         observe: 'response'
    //     });
    //   }

    // public saveRoom(params): any {
    //     return this.apiService.save<any>(`${acConfig.apiUrl}/rooms`, params);
    // }
    // public updateAppartment(params): any {
    //     return this.apiService.put(`${acConfig.apiUrl}/rl/project/ap/update`, params);
    // }
    // public deleteAppartment(params): any {
    //     return this.apiService.delete(`${acConfig.apiUrl}/rl/project/ap/delete?projectNo=${params}`);
    // }
}