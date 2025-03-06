import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../shared/services/user/user.service';
import {ContextService} from '../../../shared/services/context/context.service';
import CustomerFromApi from '../../../shared/models/entities/fromApi/CustomerFromApi';
import CarModel from '../../../shared/models/entities/CarModel';

@Component({
  selector: 'app-customer-profile',
  standalone: false,
  templateUrl: './customer-profile.component.html',
  styleUrl: './customer-profile.component.css'
})
export class CustomerProfileComponent implements OnInit {

  user!: CustomerFromApi
  userId!: string
  cars!: CarModel[]

  constructor(
    private userService: UserService,
    private contextService: ContextService,
  ) {
  }

  ngOnInit(): void {
    this.getUserId()
    this.getUser()
  }

  getUserId = () => {
    this.userId = this.contextService.getCurrentUser().id;
  }

  getUser = () => {
    this.userService.getCustomer(this.userId).subscribe({
      next: (response: any) => {
        this.user = response.value;
        this.cars = Array.from(this.user.cars)
      },
      error: (error: any) => {
        console.error(`Erro ao recuperar usuario de id ${this.userId}:`, error)
      }
    })
  }
}
