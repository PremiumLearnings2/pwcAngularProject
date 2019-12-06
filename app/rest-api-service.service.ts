import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RestApiServiceService {

  constructor( private httpClient: HttpClient) { }
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public getEmpData() {
    return this.httpClient.get(`http://dummy.restapiexample.com/api/v1/employees`).pipe(catchError(this.handleError));
  }
  public setEmpData( Data: any) {
    return this.httpClient.post(`http://dummy.restapiexample.com/api/v1/create`, Data).pipe(catchError(this.handleError));
  }
  public getUpdateEmp( id: any ) {
    return this.httpClient.get(`http://dummy.restapiexample.com/api/v1/employee/` + id).pipe(catchError(this.handleError));
  }
  public setUpdateEmpData( Data: any, id: any) {
    return this.httpClient.put(`http://dummy.restapiexample.com/api/v1/update/` + id, Data).pipe(catchError(this.handleError));
  }
  public DeleteEmp( id: any ) {
    return this.httpClient.delete(`http://dummy.restapiexample.com/api/v1/delete/` + id).pipe(catchError(this.handleError));
  }
}
