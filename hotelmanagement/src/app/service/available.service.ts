import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { room } from '../vic';

@Injectable({
  providedIn: 'root'
})
export class AvailableService {

  add='http://localhost:8080/rbook/api/add'
  constructor(private http :HttpClient) { }
  avail(room: room){
    return this.http.post(this.add,room);
  }







}
