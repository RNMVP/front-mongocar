import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../shared/services/user/user.service';
import CarModel from '../../shared/models/entities/CarModel';
import {v4 as uuidv4} from 'uuid';
import {NgForm} from '@angular/forms';
import {ToastService} from '../../shared/services/toast/toast.service';

@Component({
  selector: 'app-logon',
  standalone: false,
  templateUrl: './logon.component.html',
  styleUrl: './logon.component.css'
})
export class LogonComponent {
  name!: string;
  email!: string;
  telephone!: string;
  password!: string;
  confirmPassword!: string;
  differentPassword: boolean = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private toastService: ToastService,
  ) {}

  async onRegister(form: NgForm) {
    if(this.password !== this.confirmPassword) {
      this.differentPassword = true;
      return
    }
    if (form.invalid) {
      return;
    }

    this.userService?.createCustomer({
      id: uuidv4(),
      name: this.name,
      email: this.email,
      telephone: this.telephone,
      password: this.password,
      type: 'customer'
    }).subscribe({
      next: async (res) =>{
        this.toastService.successful('Usuario salvo com sucesso!', '')
        this.differentPassword = false;
        await this.router?.navigate(['/login']);
      },
      error: (err) => {
        this.toastService.error(`Erro ao salvar usuario`, err.message)
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
