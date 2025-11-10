import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private apiUrl = 'http://localhost:8080/oliva';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl+ '/costos');
  }
  getDataReport(): Observable<any> {
    return this.http.get<any>(this.apiUrl+ '/mantenimientos');
  }
}
