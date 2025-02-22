import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../shared/services/user.service';
import CarModel from '../../shared/models/CarModel';
import {v4 as uuidv4} from 'uuid';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-logon',
  standalone: false,
  templateUrl: './logon.component.html',
  styleUrl: './logon.component.css'
})
export class LogonComponent {
  name!: string;
  email!: string;
  password!: string;
  confirmPassword!: string;
  differentPassword: boolean = false;

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  async onRegister(form: NgForm) {
    if(this.password !== this.confirmPassword) {
      this.differentPassword = true;
      return
    }
    if (form.invalid) {
      return;
    }

    this.userService?.createClient({
      id: uuidv4(),
      name: this.name,
      email: this.email,
      password: this.password,
      cars: new Set<CarModel>()
    }).subscribe({
      next: async (res) =>{
        window.alert('Usuario salvo com sucesso!')
        this.differentPassword = false;
        await this.router?.navigate(['/login']);
      },
      error: (err) => {
        console.error('Error creating client:', err);
        this.differentPassword = false;
        this.password = ''
        this.confirmPassword = ''
      }
    })
    // Lógica de registro aqui
    console.log('Nome:', this.name);
    console.log('Email:', this.email);
    console.log('Senha:', this.password);
    console.log('Confirmar Senha:', this.confirmPassword);
  }
}
