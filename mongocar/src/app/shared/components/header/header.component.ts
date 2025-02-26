import {Component, OnDestroy, OnInit} from '@angular/core';
import {ContextService} from '../../services/context/context.service';
import CustomerToCreate from '../../models/entities/CustomerToCreate';
import EmployeeToCreate from '../../models/entities/EmployeeToCreate';
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
      if(storedUser.type === 'customer')
        this.contextService.setUser(new CustomerSubject(storedUser.name));
      else if(storedUser.type === 'employee'){
        this.contextService.setUser(new EmployeeSubject(storedUser.name));
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
