import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ServicesComponent} from './pages/services/services.component';
import {LoginComponent} from './pages/login/login.component';
import {LogonComponent} from './pages/logon/logon.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'servicos', component: ServicesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: LogonComponent },
  //{ path: 'sobre', component: SobreComponent },
  //{ path: 'contato', component: ContatoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
