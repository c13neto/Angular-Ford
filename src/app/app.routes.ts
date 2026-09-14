import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { Dashboard } from './pages/dashboard/dashboard';
import { Menu } from './components/menu/menu';
import { authGuard } from './auth/auth-guard';

export const routes: Routes = [
  {path:'login', component:Login},
  {path:'home', component:Home, canActivate: [authGuard]},
  {path:'dashboard', component:Dashboard, canActivate: [authGuard]},
  {path:'menu', component:Menu, canActivate:[authGuard]},
  {path: '', redirectTo: 'login', pathMatch: 'full' }
];
