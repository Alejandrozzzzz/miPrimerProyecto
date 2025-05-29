import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { Password } from 'primeng/password';

@Component({
  standalone: true,
  selector: 'app-users',
  imports: [
    CommonModule,
    FormsModule,         // <-- NECESARIO para [(ngModel)]
    TableModule,
    ButtonModule,
    DialogModule,        // <-- NECESARIO para <p-dialog>
    InputTextModule,     // <-- NECESARIO para pInputText
    DropdownModule       // <-- NECESARIO para p-dropdown
  ],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
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
}
