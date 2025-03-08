import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import Customer from '../../models/entities/Customer';
import Employee from '../../models/entities/Employee';
import EmployeeToEdit from '../../models/EmployeeToEdit';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  baseUrl = environment.apiUrl;

  // Customer
  createCustomer = (newCustomer: Customer) => {
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
  createEmployee = (newEmployee: Employee) => {
    return this.http.post(`${this.baseUrl}/employee`, newEmployee);
  }

  getEmployee = (employeeId: string) => {
    return this.http.get(`${this.baseUrl}/employee/${employeeId}`);
  }

  getAllEmployees = () => {
    return this.http.get(`${this.baseUrl}/employee`);
  }
  updateEmployee = (employeeToUpdate: EmployeeToEdit) => {
    return this.http.put(`${this.baseUrl}/employee`, employeeToUpdate);
  }

  deleteEmployee = (id: string) => {
    return this.http.delete(`${this.baseUrl}/employee/${id}`);
  }
}
