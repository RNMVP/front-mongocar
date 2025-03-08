import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {appConfig} from './app.config';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { LoginComponent } from './pages/login/login.component';
import { LogonComponent } from './pages/logon/logon.component';
import {FormsModule} from '@angular/forms';
import {InputText} from 'primeng/inputtext';
import { AboutComponent } from './pages/about/about.component';
import { CustomerProfileComponent } from './pages/userProfiles/customer-profile/customer-profile.component';
import { EmployeeProfileComponent } from './pages/userProfiles/employee-profile/employee-profile.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CreateEmployeeComponent } from './pages/admin/tabs/create-employee/create-employee.component';
import { EmployeesListComponent } from './pages/admin/tabs/employees-list/employees-list.component';
import {TableModule} from "primeng/table";
import {ButtonDirective, ButtonIcon} from 'primeng/button';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {Dialog} from 'primeng/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    LoginComponent,
    LogonComponent,
    AboutComponent,
    CustomerProfileComponent,
    EmployeeProfileComponent,
    AdminComponent,
    CreateEmployeeComponent,
    EmployeesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    InputText,
    TableModule,
    ButtonDirective,
    ButtonIcon,
    ConfirmDialogModule,
    Dialog
  ],
  providers: [
    ...appConfig.providers,
  ],
  bootstrap: [AppComponent,]
})
export class AppModule { }
