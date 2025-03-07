import UserModel from './UserModel';

export default class EmployeeToCreate implements UserModel{
  id: string | null;
  name: string;
  salary: number;
  position: string;
  email: string;
  password: string;
  type: 'customer' | 'employee';

  constructor(name: string, salary: number, position: string, email: string, password: string) {
    this.id = null;
    this.name = name;
    this.salary = salary;
    this.position = position;
    this.email = email;
    this.password = password;
    this.type = 'employee';
  }
}
