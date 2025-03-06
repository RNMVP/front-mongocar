import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../shared/services/auth/auth.service';
import {ToastService} from '../../shared/services/toast/toast.service';
import {ContextService} from '../../shared/services/context/context.service';
import CustomerFromApi from '../../shared/models/entities/fromApi/CustomerFromApi';
import MapUserFromApi from '../../helpers/MapUserFromApi';

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

          const userToStore = MapUserFromApi(response.value)
          if(userToStore === null){
            this.toastService.error('Algo deu errado!', 'contacte o suporte!')
            return
          }
          this.contextService.setUser(userToStore)

          console.log('Response:', response)
          this.toastService.successful('Sucesso', 'Seja bem vindo')
          this.router.navigate(['/home']);
        } else
            this.toastService.error('Token inválido', 'contacte o suporte!')
      },
      error: error => {
        console.error('Erro ao fazer login:', error);
        this.toastService.error('Credenciais inválidas', error.errors)
      }
    });
  }
}
