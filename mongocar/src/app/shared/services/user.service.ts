import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import CustomerModel from '../models/CustomerModel';
import EmployeeModel from '../models/EmployeeModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  baseUrl = environment.apiUrl;
  jsonServerUrl = "http://localhost:3000" //json-server generate a server in port 3000. use --port to define other

  createClient = (newCustomer: CustomerModel) => {
    // return this.http.post(`${this.baseUrl}/customer`, newCustomer);
    return this.http.post(`${this.jsonServerUrl}/customers`, newCustomer);
  }

  createEmployee = (newEmployee: EmployeeModel) => {
    // return this.http.post(`${this.baseUrl}/employee`, newEmployee);
    return this.http.post(`${this.jsonServerUrl}/employees`, newEmployee);
  }

  getCustomer = (customerId: string) => {
    // return this.http.get(`${this.baseUrl}/customer/${customerId}`);
    return this.http.get(`${this.jsonServerUrl}/customers/${customerId}`);
  }

  getEmployee = (employeeId: string) => {
    // return this.http.get(`${this.baseUrl}/employee/${employeeId}`);
    return this.http.get(`${this.jsonServerUrl}/employees/${employeeId}`);
  }

  getAllEmployees = () => {
    // return this.http.get(`${this.baseUrl}/employee/all`);
    return this.http.get(`${this.jsonServerUrl}/employees`);
  }

  getAllCustomers = () => {
    // return this.http.get(`${this.baseUrl}/customer/all`);
    return this.http.get(`${this.jsonServerUrl}/customers`);
  }
}
