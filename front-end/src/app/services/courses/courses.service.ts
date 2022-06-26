import { Injectable } from '@angular/core';
import { BaseDataService } from '../base-data-service';
import { acConfig } from '../../app.config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class CourseServices {
    constructor(private apiService: BaseDataService, private http: HttpClient) { }

    public getCourses():Observable<any> {
        return this.apiService.get(`courses`);
      }

    public saveCourse(params): any {
        return this.apiService.request('POST', `courses`, params);
    }
    public deleteCourse(params): any {
        return this.apiService.request('DELETE', `courses`, params);
    }
    public updateCourse(params): any {
        return this.apiService.request('PUT', `courses`, params);
    }
    
    // public getCourses(): any {
    //     // return this.apiService.get<>(`${acConfig.apiUrl}/users/login`, params);
    //     return this.http.get(`${acConfig.apiUrl}/courses`, {
    //         observe: 'response'
    //     });
    //   }

    // public saveCourse(params): any {
    //     return this.apiService.save<any>(`${acConfig.apiUrl}/courses`, params);
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