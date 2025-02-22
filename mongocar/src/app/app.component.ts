import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mongocar';

  toggleDarkMode() {
    const element = document.querySelector('html');
    element ? element.classList.toggle('my-app-dark') : console.log('não carregou')
  }
}
