import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ServicesComponent} from './pages/services/services.component';
import {LoginComponent} from './pages/login/login.component';
import {LogonComponent} from './pages/logon/logon.component';
import {AboutComponent} from './pages/about/about.component';
import {CustomerProfileComponent} from './pages/userProfiles/customer-profile/customer-profile.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'servicos', component: ServicesComponent},
  {path: 'sobrenos', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: LogonComponent},
  {path: 'perfil', component: CustomerProfileComponent},
  //{ path: 'sobre', component: SobreComponent },
  //{ path: 'contato', component: ContatoComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
