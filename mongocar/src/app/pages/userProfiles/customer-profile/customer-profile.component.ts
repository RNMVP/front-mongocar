import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-profile',
  standalone: false,
  templateUrl: './customer-profile.component.html',
  styleUrl: './customer-profile.component.css'
})
export class CustomerProfileComponent {

  user = {
    name: 'Jorge Silva',
    email: 'jorge.silva@example.com',
    cars: new Set([
      { model: 'Fusca', year: 1975, licensePlate: 'ABC-1234' },
      { model: 'Gol', year: 2010, licensePlate: 'XYZ-5678' },
    ]),
  };
}
