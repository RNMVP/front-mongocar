import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../shared/services/user/user.service';
import {ConfirmationService} from 'primeng/api';
import Employee from '../../../../shared/models/entities/Employee';
import {ToastService} from '../../../../shared/services/toast/toast.service';
import EmployeeToEdit from '../../../../shared/models/EmployeeToEdit';
import {ActionColumn, NormalColumn} from '../../../../interfaces/Column';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employees-list',
  standalone: false,
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.css'
})
export class EmployeesListComponent implements OnInit {
  employees: Employee[];
  displayEditDialog: boolean;
  selectedEmployee: EmployeeToEdit;
  columns: (ActionColumn | NormalColumn)[];

  constructor(
    private userService: UserService,
    private confirmationService: ConfirmationService,
    private toastService: ToastService,
    private router: Router,
  ) {
    this.employees = []
    this.displayEditDialog = false;
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
        action: this.openEditDialog.bind(this),
      },
      {
        Header:'Excluir',
        icon: 'pi pi-trash',
        action: this.deleteEmployee.bind(this),
      }
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
    this.displayEditDialog = true;
  }

  saveEmployee(): void {
    this.userService.updateEmployee(this.selectedEmployee).subscribe({
      next: () => {
        this.toastService.successful(
          'Sucesso',
          'Funcionário atualizado com sucesso!',
        );
        this.loadEmployees();
        this.displayEditDialog = false;
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
