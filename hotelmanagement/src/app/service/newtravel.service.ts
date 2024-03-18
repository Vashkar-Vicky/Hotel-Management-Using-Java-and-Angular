import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewtravelService {
  private baseUrl = 'http://localhost:8080'; // Replace with the actual backend URL

  constructor(private http: HttpClient) { }

  getTravelData(): Observable<Body> {
    return this.http.get<Body>(this.baseUrl);
  }
  get(url: string) {
    return this.http.get(this.baseUrl + url);
  }
}

