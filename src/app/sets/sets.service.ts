import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetsService {

  constructor(private http: HttpClient) {}

  getSets() {
    return this.http.get('http://localhost:3000/set');
  }
}
