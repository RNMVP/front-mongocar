import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import {ButtonModule} from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterLink} from '@angular/router';



@NgModule({
  declarations: [
    ButtonComponent
  ],
  exports: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    BrowserAnimationsModule,
    RouterLink,
  ],
})
export class SharedModule { }
