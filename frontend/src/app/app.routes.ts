import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { UsersComponent } from './pages/users/users.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'users', component: UsersComponent }, // NUEVA RUTA
      { path: 'login', component: LoginComponent }, // NUEVA RUTA
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  }
];