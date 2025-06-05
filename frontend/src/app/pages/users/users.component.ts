import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
<<<<<<< HEAD
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { Password } from 'primeng/password';
=======
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { UsersService, NewUser } from '../../services/users.service';
>>>>>>> c5b2ad9ed2b816feb3611e2a7ffb88615217d6d8

@Component({
  standalone: true,
  selector: 'app-users',
<<<<<<< HEAD
  imports: [
    CommonModule,
    FormsModule,         // <-- NECESARIO para [(ngModel)]
    TableModule,
    ButtonModule,
    DialogModule,        // <-- NECESARIO para <p-dialog>
    InputTextModule,     // <-- NECESARIO para pInputText
    DropdownModule       // <-- NECESARIO para p-dropdown
  ],
=======
  imports: [CommonModule, FormsModule, TableModule, ButtonModule, InputTextModule, PasswordModule],
>>>>>>> c5b2ad9ed2b816feb3611e2a7ffb88615217d6d8
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
<<<<<<< HEAD
users = [
  {
    id: 1,
    name: 'Juan Pérez',
    email: 'juan@example.com',
    role: 'Admin',
    username: 'juanp',
    password: "Jue",
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
 // Estado del diálogo
  displayDialog: boolean = false;

  // Lista de roles disponibles
  roles = [
    { label: 'Admin', value: 'Admin' },
    { label: 'Usuario', value: 'Usuario' }
  ];

  // Objeto para capturar nuevo usuario
  newUser = {
    name: '',
    Password:"",
    username: '',
    email: '',
    role: ''
  };

  // Método para guardar usuario
  guardarUsuario() {
    if (this.newUser.name && this.newUser.username && this.newUser.email && this.newUser.role) {
      this.users.push({
        ...this.newUser,
        id: this.users.length + 1,
        status: 'Activo',
        createdAt: new Date().toISOString().split('T')[0],
        lastLogin: '-'
      });

      this.newUser = {
        name: '',
        username: '',
        Password:'',
        email: '',
        role: ''
      };

      this.displayDialog = false;
    }
  }
=======
  showForm = false;
  newUser: NewUser = { nombre: '', usuario: '', clave: '', correo: '', rol: '' };

  constructor(private usersService: UsersService) {}

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
>>>>>>> c5b2ad9ed2b816feb3611e2a7ffb88615217d6d8
}
