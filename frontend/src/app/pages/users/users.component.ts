import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@Component({
  standalone: true,
  selector: 'app-users',
  imports: [CommonModule, TableModule, ButtonModule],
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
}
