import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {  HttpClient, HttpParams } from '@angular/common/http';
import { HeaderProviderService } from './header-provider.service';
import { acConfig } from './../app.config';
@Injectable({
  providedIn: 'root'
})

export class BaseDataService {
  private httpOptions: any;

  // constructor
  constructor(private http: HttpClient, private headerProvd: HeaderProviderService) {
    this.httpOptions = headerProvd.getHeader('application/x-www-form-urlencoded');
  }

  // formatErrors
  private formatErrors(error: any) {
    return throwError(error.error);
  }

  // executeQuery
  public executeQuery<T>(path: string, params: any = {}): Observable<any> {
    const _params = this.headerProvd.getHttpParamsByData(params);
    return this.http.post<T>(
      `${path}`,
      _params,
      this.httpOptions
    ).pipe(catchError(this.formatErrors));
  }

  // save
  public save<T>(path: string, entity: any): Observable<any> {
    // const _params = this.headerProvd.getHttpParamsByData(entity);
    return this.http.post<T>(
      `${path}`,
      entity,
      this.headerProvd.getHeader('application/json')
    ).pipe(catchError(this.formatErrors));
  }
  // save
  public imageSave<T>(path: string, entity: any): Observable<any> {
    // const _params = this.headerProvd.getHttpParamsByData(entity);
    return this.http.post<T>(
      `${path}`,
      entity,
      this.headerProvd.getHeader('multipart/form-data')
    ).pipe(catchError(this.formatErrors));
  }

  // delete
  public delete<T>(path: string,): Observable<any> {
    return this.http.delete<T>(
      `${path}`
    ).pipe(catchError(this.formatErrors));
  }

  // get data from file
  public getFileData(filePath: any): Observable<any> {
    return this.http.get(filePath);
  }

  // get(path: string, params:any): Observable<any> {
  //   return this.http.get(`${path}`, { params })
  //     .pipe(catchError(this.formatErrors));
  // }

  put(path: string, entity:any): Observable<any> {
    return this.http.put(
      `${path}`,
      JSON.stringify(entity),
      this.headerProvd.getHeader('application/json')
    ).pipe(catchError(this.formatErrors));
  }
  loggedIn = true;
  token = localStorage.getItem('PRIDE_BOARD_AuthToken');
  get(route: string, data?: any) {
    const header = (this.loggedIn) ? { Authorization: `Bearer ${this.token}` } : undefined;

    let params = new HttpParams();
    if (data !== undefined) {
      Object.getOwnPropertyNames(data).forEach(key => {
        params = params.set(key, data[key]);
      });
    }

    return this.http.get(`${acConfig.apiUrl}/${route}`, {
      responseType: 'json',
      headers: header,
      params
    });
  }
  request(method: string, route: string, data?: any) {
    if (method === 'GET') {
      return this.get(route, data);
    }

    const header = (this.loggedIn) ? { Authorization: `Bearer ${this.token}` } : undefined;

    return this.http.request(method, `${acConfig.apiUrl}/${route}`, {
      body: data,
      responseType: 'json',
      observe: 'body',
      headers: header
    });
  }



}
