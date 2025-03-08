import { Component } from '@angular/core';
import Employee from '../../../../shared/models/entities/Employee';
import {ToastService} from '../../../../shared/services/toast/toast.service';
import {UserService} from '../../../../shared/services/user/user.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-create-employee',
  standalone: false,
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent {
  employee: Employee = {
    id: null,
    name: '',
    salary: 0,
    position: '',
    email: '',
    password: '',
    type: 'employee'
  };

  constructor(
    private toastService: ToastService,
    private userService: UserService,
  ) {}

  onSubmit(): void {
    this.userService.createEmployee(this.employee).subscribe({
      next: (response) => {
        this.toastService.successful('Funcionário adicionado\ncom sucesso', '')
        console.log('Funcionário adicionado com sucesso:', response);
      },
      error: (error: HttpErrorResponse) => {
        this.toastService.error(`Erro ao salvar usuario`, error.error.errors)
        console.error('Erro ao adicionar funcionário:', error);
      },
    });
  }
}
