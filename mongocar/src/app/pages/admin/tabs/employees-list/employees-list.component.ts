import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../shared/services/user/user.service';
import {ConfirmationService} from 'primeng/api';
import Employee from '../../../../shared/models/entities/Employee';
import {ToastService} from '../../../../shared/services/toast/toast.service';
import EmployeeToEdit from '../../../../shared/models/EmployeeToEdit';

@Component({
  selector: 'app-employees-list',
  standalone: false,
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.css'
})
export class EmployeesListComponent implements OnInit {
  employees: Employee[] = [];
  displayEditDialog: boolean = false; // Controla a visibilidade do modal
  selectedEmployee: EmployeeToEdit = {id: '', email: '', name: '', position: '', salary: 0}; // Funcionário selecionado para edição

  constructor(
    private userService: UserService,
    private confirmationService: ConfirmationService,
    private toastService: ToastService,
  ) {
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
    this.selectedEmployee = {...employee}; // Copia os dados do funcionário selecionado
    this.displayEditDialog = true; // Abre o modal
  }

  saveEmployee(): void {
    this.userService.updateEmployee(this.selectedEmployee).subscribe({
      next: () => {
        this.toastService.successful(
          'Sucesso',
          'Funcionário atualizado com sucesso!',
        );
        this.loadEmployees(); // Recarrega a lista após a edição
        this.displayEditDialog = false; // Fecha o modal
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
            this.loadEmployees(); // Recarrega a lista após a exclusão
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
