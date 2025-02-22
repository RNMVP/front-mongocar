import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import {ButtonModule} from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterLink} from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import {Toast} from 'primeng/toast';
import {Menu} from 'primeng/menu';
import {provideHttpClient} from '@angular/common/http';
import {UserService} from './services/user/user.service';
import {ToastService} from './services/toast/toast.service';
import { ToastComponent } from './components/toast/toast/toast.component';
import {MessageService} from 'primeng/api';



@NgModule({
  declarations: [
    ButtonComponent,
    MenuComponent,
    ToastComponent,
  ],
  exports: [
    ButtonComponent,
    MenuComponent,
    ToastComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    BrowserAnimationsModule,
    RouterLink,
    Toast,
    Menu,
  ],
  providers: [
    provideHttpClient(),
    MessageService,
    UserService,
    ToastService,
  ]
})
export class SharedModule { }
