import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ImageSlider, Workshop, Techbhukkads, Farewell } from './activities';

@Injectable()
export class ActivitiesService {
  constructor(private http: HttpClient) {}
  public imageSlider =
    'https://ooug-dev-1fbf3.el.r.appspot.com/get-image-slider';
  public workshop =
    'https://ooug-dev-1fbf3.el.r.appspot.com/get-event-detail-workshop';
  public techbhukkads =
    'https://ooug-dev-1fbf3.el.r.appspot.com/get-event-detail-techbhukkads';
  public farewell =
    'https://ooug-dev-1fbf3.el.r.appspot.com/get-event-detail-farewell';
  getSlide(): Observable<ImageSlider> {
    return this.http
      .get<ImageSlider>(this.imageSlider)
      .pipe(catchError(this.errorHandlerSlider));
  }
  getWorkshop(): Observable<Workshop> {
    return this.http
      .get<Workshop>(this.workshop)
      .pipe(catchError(this.errorHandlerWorkshop));
  }
  getTechbhukkads(): Observable<Techbhukkads> {
    return this.http
      .get<Techbhukkads>(this.techbhukkads)
      .pipe(catchError(this.errorHandlerTechbhukkads));
  }
  getFarewell(): Observable<Farewell> {
    return this.http
      .get<Farewell>(this.farewell)
      .pipe(catchError(this.errorHandlerFarewell));
  }
  errorHandlerSlider(error: HttpErrorResponse) {
    return throwError(error.message || 'server error');
  }
  errorHandlerWorkshop(error: HttpErrorResponse) {
    return throwError(error.message || 'server error');
  }
  errorHandlerTechbhukkads(error: HttpErrorResponse) {
    return throwError(error.message || 'server error');
  }
  errorHandlerFarewell(error: HttpErrorResponse) {
    return throwError(error.message || 'server error');
  }
}
