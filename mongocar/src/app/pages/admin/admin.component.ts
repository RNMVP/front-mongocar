import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  tabs = [
    { label: 'Adicionar funcionario', icon: 'pi pi-plus', route: 'create-employee' },
    { label: 'Funcionários', icon: 'pi pi-users', route: 'employees' },
    { label: 'Relatórios', icon: 'pi pi-chart-bar', route: 'reports' },
  ];
}
