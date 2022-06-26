import { Injectable } from '@angular/core';
import { BaseDataService } from './base-data-service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class AssignServices {
    constructor(private apiService: BaseDataService, private http: HttpClient) { }

    public getAssigns():Observable<any> {
        return this.apiService.get(`assigns`);
    }
    public saveAssign(params): any {
        return this.apiService.request('POST', `assigns`, params);
    }
    public deleteAssign(params): any {
        return this.apiService.request('DELETE', `assigns`, params);
    }
    public updateAssign(params): any {
        return this.apiService.request('PUT', `assigns`, params);
    }
    
}