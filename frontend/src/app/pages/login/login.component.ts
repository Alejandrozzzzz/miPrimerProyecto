import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-login',
  standalone: true,
 imports: [CommonModule, FormsModule, InputTextModule, PasswordModule, ButtonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit() {
     console.log('Intentando iniciar sesión...');
    this.auth.login(this.username, this.password).subscribe({
     next: (res: any) => {
        this.auth.guardarSesion(res.usuario);
        this.router.navigate(['/home']);
      },
    error: (err: any) => {
        this.error = err.error?.error || 'Error al iniciar sesión';
      }
    });
  }
}
