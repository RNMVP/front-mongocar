import {Component, OnDestroy, OnInit} from '@angular/core';
import {ContextService} from '../../services/context/context.service';
import CustomerModel from '../../models/entities/CustomerModel';
import EmployeeModel from '../../models/entities/EmployeeModel';
import {Subscription} from 'rxjs';
import UserModel from '../../models/entities/UserModel';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  user!: UserModel | null
  subscription!: Subscription;

  constructor(private contextService: ContextService) {
  }

  ngOnInit() {
    this.subscription = this.contextService.user$.subscribe({
      next: (user: UserModel | null) => {
        console.log('Usuario loggado:', user);
        this.user = user;
      }
    })
  }

  onLogout() {
    this.contextService.clearUser();
  }

  isCustomer(): boolean {
    return this.user instanceof CustomerModel;
  }

  isEmployee(): boolean {
    return this.user instanceof EmployeeModel;
  }

  isLoggedIn(): boolean {
    return this.user !== null;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
