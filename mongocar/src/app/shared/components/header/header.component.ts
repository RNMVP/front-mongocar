import {Component, OnDestroy, OnInit} from '@angular/core';
import {ContextService} from '../../services/context/context.service';
import {Subscription} from 'rxjs';
import UserModel from '../../models/entities/UserModel';
import {AuthService} from '../../services/auth/auth.service';
import CustomerSubject from '../../models/CustomerSubject';
import EmployeeSubject from '../../models/EmployeeSubject';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  user!: UserModel | null
  subscription!: Subscription;

  constructor(
    private contextService: ContextService,
    private authService: AuthService,
  ) {
  }

  ngOnInit() {
    const storedUser: UserModel = this.contextService.getCurrentUser();
    if(storedUser){
      if(storedUser.type === 'customer') {
        const customer = CustomerSubject.fromJson({id: storedUser.id, name: storedUser.name})
        this.contextService.setUser(customer);
      }
      else if(storedUser.type === 'employee'){
        this.contextService.setUser(new EmployeeSubject(storedUser.id, storedUser.name, (storedUser as EmployeeSubject).salary, (storedUser as EmployeeSubject).position));
      }
    }

    this.subscription = this.contextService.user$.subscribe({
      next: (user: UserModel | null) => {
        this.user = user;
      }
    })
  }

  async onLogout() {
    this.contextService.clearUser();
    // await this.authService.logout()
  }

  isCustomer(): boolean {
    return this.user instanceof CustomerSubject;
  }

  isEmployee(): boolean {
    return this.user instanceof EmployeeSubject;
  }

  isLoggedIn(): boolean {
    return this.user !== null;
  }

  get profileRouterLink(): string {
    if (this.user instanceof EmployeeSubject) {
      return '/perfil-funcionario'; // Rota para employee
    } else if (this.user instanceof CustomerSubject) {
      return '/perfil-cliente'; // Rota para customer
    }

    return '/'; // Rota padrão (caso o usuário não esteja logado)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
