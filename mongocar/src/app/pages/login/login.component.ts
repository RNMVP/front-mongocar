import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../shared/services/auth/auth.service';
import {ToastService} from '../../shared/services/toast/toast.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private toastService: ToastService,
  ) {}

  async onLogin() {
    await this.authService.login({username: this.email, password: this.password});
    if (this.authService.authenticate()) {
      this.toastService.successful('Sucesso', 'Seja bem vindo')
      await this.router.navigate(['/home']);
    }else
      this.toastService.error('Credenciais inválidas', 'email ou senha incorretos')
  }
}
