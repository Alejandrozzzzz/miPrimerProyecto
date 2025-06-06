import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getHello() {
    return this.http.get<{ message: string }>('http://localhost:3000/users');
  }
}
