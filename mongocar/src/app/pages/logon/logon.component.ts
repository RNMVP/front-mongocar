import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logon',
  standalone: false,
  templateUrl: './logon.component.html',
  styleUrl: './logon.component.css'
})
export class LogonComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) {}

  async onRegister() {
    // Lógica de registro aqui
    console.log('Nome:', this.name);
    console.log('Email:', this.email);
    console.log('Senha:', this.password);
    console.log('Confirmar Senha:', this.confirmPassword);

    await this.router.navigate(['/login']);
  }
}
