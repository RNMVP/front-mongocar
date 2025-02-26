import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../shared/services/auth/auth.service';
import {ToastService} from '../../shared/services/toast/toast.service';
import {ContextService} from '../../shared/services/context/context.service';

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
    private contextService: ContextService,
    private toastService: ToastService,
  ) {
  }

  async onLogin() {
    this.authService.login({username: this.email, password: this.password}).subscribe({
      next: (response: any) => {
        if (this.authService.authenticate()) {
          this.toastService.successful('Sucesso', 'Seja bem vindo')
          this.contextService.setUser(response.user)
          console.log('Response:', response)
          this.router.navigate(['/home']);
        } else
            this.toastService.error('Token inválido', 'contacte o suporte!')
      },
      error: error => {
        console.error('Erro ao fazer login:', error);
        this.toastService.error('Credenciais inválidas', 'email ou senha incorretos')
      }
    });
  }
}
