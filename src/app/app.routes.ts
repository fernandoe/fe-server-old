import {Routes} from '@angular/router';
import {LoginComponent} from './views/basic-pages/login/login.component';
import {BlankLayoutComponent} from './views/layouts/blank/blankLayout.component';
import {RegisterComponent} from './views/basic-pages/register/register.component';
import {MainlyComponent} from './views/layouts/mainly/mainly.component';
import {ClientesComponent} from './views/clientes/list/clientes.component';
import {AuthGuardService} from './services/auth-guard.service';
import {ClientePersistComponent} from './views/clientes/persist/cliente-persist.component';

export const ROUTES: Routes = [
  {
    path: '', component: MainlyComponent,
    children: [
      {path: 'clientes', component: ClientesComponent, canActivate: [AuthGuardService]},
      {path: 'clientes/:uuid', component: ClientePersistComponent, canActivate: [AuthGuardService]}
    ]
  },
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent}
    ]
  },
  {path: '**', redirectTo: '/list'}
];
