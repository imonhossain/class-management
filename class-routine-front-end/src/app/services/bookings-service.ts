import { Injectable } from '@angular/core';
import { BaseDataService } from './base-data-service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class BookingServices {
    constructor(private apiService: BaseDataService, private http: HttpClient) { }

    public getRotines():Observable<any> {
        return this.apiService.get(`bookings/routine`);
    }
    public getBookings():Observable<any> {
        return this.apiService.get(`bookings`);
    }
    public saveBooking(params): any {
        return this.apiService.request('POST', `bookings`, params);
    }
    public deleteBooking(params): any {
        return this.apiService.request('DELETE', `bookings`, params);
    }
    public updateBooking(params): any {
        return this.apiService.request('PUT', `bookings`, params);
    }
    
}