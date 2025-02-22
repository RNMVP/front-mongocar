import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'mongocar';
  menuItens!: MenuItem[];

  ngOnInit(): void {
    this.menuItens = [
      {
        label: 'Options',
        items: [
          {
            label: 'Refresh',
            icon: 'pi pi-refresh'
          },
          {
            label: 'Export',
            icon: 'pi pi-upload'
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
