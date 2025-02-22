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
import {UserService} from './services/user.service';



@NgModule({
  declarations: [
    ButtonComponent,
    MenuComponent,
  ],
  exports: [
    ButtonComponent,
    MenuComponent
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
    UserService,
    provideHttpClient(),
  ]
})
export class SharedModule { }
