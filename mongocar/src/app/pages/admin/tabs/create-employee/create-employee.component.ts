import { Component } from '@angular/core';
import Employee from '../../../../shared/models/entities/Employee';
import {ToastService} from '../../../../shared/services/toast/toast.service';
import {UserService} from '../../../../shared/services/user/user.service';
import {HttpErrorResponse} from '@angular/common/http';
import mapErrorsFromApi from '../../../../helpers/MapErrorsFromApi';
import {NgForm} from '@angular/forms';

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

  onSubmit(form: NgForm): void {
    this.userService.createEmployee(this.employee).subscribe({
      next: (response) => {
        this.toastService.successful('Funcionário adicionado\ncom sucesso', '')
        form.reset()

      },
      error: (error: HttpErrorResponse) => {
        this.toastService.error(`Erro ao salvar usuario`, mapErrorsFromApi(error))
      },
    });
  }
}
