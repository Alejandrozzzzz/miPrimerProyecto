import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  login(usuario: string, clave: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { usuario, clave });
  }

  guardarSesion(usuario: any) {
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }

  obtenerUsuario() {
    return JSON.parse(localStorage.getItem('usuario') || 'null');
  }

  cerrarSesion() {
    localStorage.removeItem('usuario');
  }
}
