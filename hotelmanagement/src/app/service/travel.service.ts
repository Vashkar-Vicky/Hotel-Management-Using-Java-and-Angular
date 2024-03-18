import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TravelItem } from '../vic';

@Injectable({
  providedIn: 'root'
})
export class TravelService {
  private baseUrl = 'http://localhost:8080/travel/rss';

  constructor(private http: HttpClient) { }

  getTravelRss(): Observable<TravelItem[]> {
    const url = `${this.baseUrl}`; // Use backticks for template literal
    return this.http.get<TravelItem[]>(url);
  }
}
