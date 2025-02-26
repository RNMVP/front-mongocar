import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import UserModel from '../../models/entities/UserModel';

@Injectable({
  providedIn: 'root'
})
export class ContextService {

  private userSubject = new BehaviorSubject<UserModel | null>(null);
  user$ = this.userSubject.asObservable();

  setUser(user: UserModel) {
    this.userSubject.next(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  getCurrentUser() {
    const jsonUser = localStorage.getItem('user');
    return jsonUser ? JSON.parse(jsonUser) : null;
  }

  clearUser() {
    this.userSubject.next(null);
    localStorage.removeItem('user');
  }
}
