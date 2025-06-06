import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { PasswordModule } from 'primeng/password';
import { UsersService, NewUser } from '../../services/users.service';
import { ViewEncapsulation } from '@angular/core';

@Component({
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  selector: 'app-users',
  imports: [CommonModule, FormsModule, TableModule, ButtonModule, InputTextModule, PasswordModule,DialogModule,],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
  
})
export class UsersComponent {
  showForm = false;
  editingUser = false;
  newUser: NewUser = { nombre: '', usuario: '', clave: '', correo: '', rol: '' };
 users = [
    {
      id: 1,
      name: 'Juan Pérez',
      email: 'juan@example.com',
      role: 'Admin',
      username: 'juanp',
      status: 'Activo',
      createdAt: '2024-01-01',
      lastLogin: '2024-05-25 10:30'
    },
    {
      id: 2,
      name: 'María Gómez',
      email: 'maria@example.com',
      role: 'Usuario',
      username: 'mariag',
      status: 'Activo',
      createdAt: '2024-02-12',
      lastLogin: '2024-05-24 09:45'
    },
    {
      id: 3,
      name: 'Carlos Ruiz',
      email: 'carlos@example.com',
      role: 'Usuario',
      username: 'cruiz',
      status: 'Inactivo',
      createdAt: '2024-03-01',
      lastLogin: '2024-05-10 14:15'
    }
  ];
  constructor(private usersService: UsersService) {

   this.usersService.getUsers().subscribe(Objeto=>{
    console.log(Objeto)
     console.log(Objeto.users)
  this.users=Objeto.users

   })
  }

 

  toggleForm() {
    this.showForm = !this.showForm;
    if (this.showForm) {
      this.newUser = { nombre: '', usuario: '', clave: '', correo: '', rol: '' };
    }
  }

  addUser() {
    this.usersService.register(this.newUser).subscribe((respuesta) => {
      this.showForm = false;
      this.users.push({
        id: respuesta.user._id   ,//       this.users.length + 1,
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
