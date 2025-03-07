import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ServicesComponent} from './pages/services/services.component';
import {LoginComponent} from './pages/login/login.component';
import {LogonComponent} from './pages/logon/logon.component';
import {AboutComponent} from './pages/about/about.component';
import {CustomerProfileComponent} from './pages/userProfiles/customer-profile/customer-profile.component';
import {EmployeeProfileComponent} from './pages/userProfiles/employee-profile/employee-profile.component';
import {AdminComponent} from './pages/admin/admin.component';
import {CreateEmployeeComponent} from './pages/admin/tabs/create-employee/create-employee.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'servicos', component: ServicesComponent},
  {path: 'sobrenos', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: LogonComponent},
  {path: 'perfil-cliente', component: CustomerProfileComponent},
  {path: 'perfil-funcionario', component: EmployeeProfileComponent},
  {
    path: 'dashboard',
    component: AdminComponent,
    children: [
      {path: 'create-employee', component: CreateEmployeeComponent},
      {path: 'menage-customers', component: AdminComponent},
      {path: 'something', component: AdminComponent},
      {path: '', redirectTo: 'create-employee', pathMatch: 'full'},
    ]
  },

  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
