import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'mongocar';
  menuItens!: MenuItem[];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.menuItens = [
      {
        label: '',
        items: [
          {
            label: 'Login',
            icon: 'pi pi-user-edit',
            routerLink: '/login',
          },
          {
            label: 'Registre-se',
            icon: 'pi pi-user-plus',
            routerLink: '/registro',
          }
        ]
      }
    ];
  }

  // toggleDarkMode() {
  //   const element = document.querySelector('html');
  //   element ? element.classList.toggle('my-app-dark') : console.log('não carregou')
  // }
}
