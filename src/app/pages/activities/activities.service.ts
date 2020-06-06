import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ActivitiesService {
  constructor(private http: HttpClient) {}
  getSlide(): Observable<any> {
    return this.http
      .get<any>('http://localhost:8080/acivityslider')
      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'server error');
  }
}
