import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import CustomerToCreate from '../../models/entities/CustomerToCreate';
import EmployeeToCreate from '../../models/entities/EmployeeToCreate';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  baseUrl = environment.apiUrl;

  // Customer
  createCustomer = (newCustomer: CustomerToCreate) => {
    return this.http.post(`${this.baseUrl}/customer`, newCustomer);
  }

  getCustomer = (customerId: string) => {
    return this.http.get(`${this.baseUrl}/customer/${customerId}`);
  }

  getAllCustomers = () => {
    return this.http.get(`${this.baseUrl}/customer`);
  }

 //////////////////////========//////////////================////////////////

  // Employee
  createEmployee = (newEmployee: EmployeeToCreate) => {
    return this.http.post(`${this.baseUrl}/employee`, newEmployee);
  }

  getEmployee = (employeeId: string) => {
    return this.http.get(`${this.baseUrl}/employee/${employeeId}`);
  }

  getAllEmployees = () => {
    return this.http.get(`${this.baseUrl}/employee`);
  }
}
