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

  users: any[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.loadUsers();
  }

  private loadUsers() {
    this.usersService.getUsers().subscribe((data) => {
      this.users = data.map((u: any) => ({
        id: u._id,
        name: u.nombre,
        username: u.usuario,
        email: u.correo,
        role: u.rol,
        status: u.activo ? 'Activo' : 'Inactivo',
        createdAt: u.fecha_creacion ? u.fecha_creacion.split('T')[0] : '',
        lastLogin: ''
      }));
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
      this.loadUsers();
    });
  }
}
