import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface NewUser {
  nombre: string;
  usuario: string;
  clave: string;
  correo: string;
  rol: string;
}

@Injectable({ providedIn: 'root' })
export class UsersService {
  private apiUrl = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) {}

  register(user: NewUser): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  getUsers(page: number = 1): Observable<any> {
    return this.http.get(`${this.apiUrl}?page=${page}&limit=50`);
  }
}
