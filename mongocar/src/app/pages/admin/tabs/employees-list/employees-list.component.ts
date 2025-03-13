import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../../shared/services/user/user.service';
import {ConfirmationService} from 'primeng/api';
import Employee from '../../../../shared/models/entities/Employee';
import {ToastService} from '../../../../shared/services/toast/toast.service';
import EmployeeToEdit from '../../../../shared/models/EmployeeToEdit';
import {ActionColumn, NormalColumn} from '../../../../interfaces/Column';
import {Router} from '@angular/router';
import {DialogFormComponent} from '../../../../shared/components/primeng/dialog-form/dialog-form.component';

@Component({
  selector: 'app-employees-list',
  standalone: false,
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.css'
})
export class EmployeesListComponent implements OnInit {
  @ViewChild(DialogFormComponent) dialogForm!: DialogFormComponent;

  employees: Employee[];
  selectedEmployee: EmployeeToEdit;
  columns: (ActionColumn | NormalColumn)[];
  dialogFields!: {value: string, type: string}[];

  constructor(
    private userService: UserService,
    private confirmationService: ConfirmationService,
    private toastService: ToastService,
    private router: Router,
  ) {
    this.employees = []
    this.selectedEmployee = {id: '', email: '', name: '', position: '', salary: 0};
    this.columns = [
      {
        field: 'name',
        header: 'Nome',
        clickable: true,
        action: async (employee: Employee) => {
          await this.router.navigate(['/user-detail', employee.id])
        }
      },
      {
        field: 'salary',
        header: 'Salário',
      },
      {
        field: 'position',
        header: 'Função',
      },
      {
        field: 'email',
        header: 'Email',
      },
      {
        header: 'Editar',
        icon:'pi pi-pencil',
        action: (employee: EmployeeToEdit) => {this.openEditDialog(employee)},
      },
      {
        header:'Excluir',
        icon: 'pi pi-trash',
        action: (employee: Employee) => {this.deleteEmployee(employee)},
      }
    ]
    this.dialogFields = [
      {
        value: 'name',
        type: 'text'
      },
      {
        value: 'email',
        type: 'email'
      },
      {
        value: 'salary',
        type: 'number'
      },
      {
        value: 'position',
        type: 'text'
      },
    ]
  }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.userService.getAllEmployees().subscribe({
      next: (data: any) => {
        this.employees = data.value;
      },
      error: (error: any) => {
        console.error('Erro ao carregar funcionários:', error);
      },
    });
  }

  openEditDialog(employee: EmployeeToEdit): void {
    this.selectedEmployee = {...employee};

    this.dialogForm.changeVisibility()
  }

  saveEmployee = () => {
    this.userService.updateEmployee(this.selectedEmployee).subscribe({
      next: () => {
        this.toastService.successful(
          'Sucesso',
          'Funcionário atualizado com sucesso!',
        );
        this.loadEmployees();
        this.dialogForm.changeVisibility();
      },
      error: (error: any) => {
        console.error('Erro ao atualizar funcionário:', error);
        this.toastService.error(
          'Erro',
          'Não foi possível atualizar o funcionário.',
        );
      },
    });
  }

  deleteEmployee(employee: Employee): void {
    this.confirmationService.confirm({
      message: `Tem certeza que deseja remover ${employee.name}?`,
      header: 'Confirmar Exclusão',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.userService.deleteEmployee(employee.id as string).subscribe({
          next: () => {
            this.toastService.successful(
              'Sucesso',
              'Funcionário removido com sucesso!',
            );
            this.loadEmployees();
          },
          error: (error: any) => {
            console.error('Erro ao remover funcionário:', error);
            this.toastService.error(
              'Erro',
              'Não foi possível remover o funcionário.',
            );
          },
        });
      },
    });
  }
}
