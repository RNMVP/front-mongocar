import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import CustomerModel from '../../models/entities/CustomerModel';
import EmployeeModel from '../../models/entities/EmployeeModel';

@Injectable({
  providedIn: 'root'
})
export class ContextService {

  private userSubject = new BehaviorSubject<CustomerModel | EmployeeModel | null>(null);
  user$ = this.userSubject.asObservable();

  setUser(user: any) {
    this.userSubject.next(user);
  }

  getCurrentUser() {
    return this.userSubject.value;
  }

  clearUser() {
    this.userSubject.next(null);
  }
}
