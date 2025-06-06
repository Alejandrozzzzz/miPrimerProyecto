import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { UsersService, NewUser } from '../../services/users.service';

@Component({
  standalone: true,
  selector: 'app-users',
  imports: [CommonModule, FormsModule, TableModule, ButtonModule, InputTextModule, PasswordModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  showForm = false;
  newUser: NewUser = { nombre: '', usuario: '', clave: '', correo: '', rol: '' };

  constructor(private usersService: UsersService) {}

  users: any[] = [];

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(page: number = 1) {
    this.usersService.getUsers(page).subscribe((res) => {
      this.users = res.users;
    });
  }

  toggleForm() {
    this.showForm = !this.showForm;
    if (this.showForm) {
      this.newUser = { nombre: '', usuario: '', clave: '', correo: '', rol: '' };
    }
  }

  addUser() {
    this.usersService.register(this.newUser).subscribe(() => {
      this.showForm = false;
      this.users.push({
        id: this.users.length + 1,
        name: this.newUser.nombre,
        email: this.newUser.correo,
        role: this.newUser.rol,
        username: this.newUser.usuario,
        status: 'Activo',
        createdAt: new Date().toISOString().split('T')[0],
        lastLogin: ''
      });
    });
  }
}
