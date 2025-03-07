import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/primeng/button/button.component';
import {ButtonModule} from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterLink, RouterOutlet} from '@angular/router';
import { MenuComponent } from './components/primeng/menu/menu.component';
import {Toast} from 'primeng/toast';
import {Menu} from 'primeng/menu';
import {provideHttpClient} from '@angular/common/http';
import {UserService} from './services/user/user.service';
import {ToastService} from './services/toast/toast.service';
import { ToastComponent } from './components/primeng/toast/toast.component';
import {MessageService} from 'primeng/api';
import {AuthService} from './services/auth/auth.service';
import { HeaderComponent } from './components/header/header.component';
import {ContextService} from './services/context/context.service';
import { TabComponent } from './components/primeng/tab/tab.component';
import {Tab, TabList, Tabs} from 'primeng/tabs';



@NgModule({
  declarations: [
    ButtonComponent,
    MenuComponent,
    ToastComponent,
    HeaderComponent,
    TabComponent,
  ],
  exports: [
    ButtonComponent,
    MenuComponent,
    ToastComponent,
    HeaderComponent,
    TabComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    BrowserAnimationsModule,
    RouterLink,
    Toast,
    Menu,
    RouterOutlet,
    Tabs,
    TabList,
    Tab,
  ],
  providers: [
    provideHttpClient(),
    MessageService,
    UserService,
    ToastService,
    AuthService,
    ContextService
  ]
})
export class SharedModule { }
