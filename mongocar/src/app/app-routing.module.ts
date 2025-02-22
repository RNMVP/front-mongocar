import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ServicesComponent} from './pages/services/services.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'servicos', component: ServicesComponent },
  //{ path: 'sobre', component: SobreComponent },
  //{ path: 'contato', component: ContatoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Rota padrão
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
