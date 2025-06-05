import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface NewUser {
  nombre: string;
  usuario: string;
  clave: string;
  correo: string;
  rol: string;
}

@Injectable({ providedIn: 'root' })
export class UsersService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  register(user: NewUser): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }
}
