import { Injectable } from '@angular/core';
import { BaseDataService } from './base-data-service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class TeacherServices {
    loggedIn= true;
    constructor(private apiService: BaseDataService, private http: HttpClient) { }
    public getTeachers():Observable<any> {
        return this.apiService.get(`teachers`);
      }

    public saveTeacher(params): any {
        return this.apiService.request('POST', `teachers`, params);
    }
    public deleteTeacher(params): any {
        return this.apiService.request('DELETE', `teachers`, params);
    }
    public updateTeacher(params): any {
        return this.apiService.request('PUT', `teachers`, params);
    }

    // public updateTeacher(params): any {
    //     return this.apiService.put(`${acConfig.apiUrl}/teachers`, params);
    // }


    // public saveAppartment(params): any {
    //     return this.apiService.save<any>(`${acConfig.apiUrl}/rl/project/ap/add`, params);
    // }
    // public updateAppartment(params): any {
    //     return this.apiService.put(`${acConfig.apiUrl}/rl/project/ap/update`, params);
    // }
    // public deleteAppartment(params): any {
    //     return this.apiService.delete(`${acConfig.apiUrl}/rl/project/ap/delete?projectNo=${params}`);
    // }
}