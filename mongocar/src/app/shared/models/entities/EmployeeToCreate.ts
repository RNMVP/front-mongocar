import UserModel from './UserModel';

export default class EmployeeToCreate implements UserModel{
  id: string | null;
  name: string;
  salary: number;
  position: string;
  type: 'customer' | 'employee';

  constructor(name: string, salary: number, position: string) {
    this.id = null;
    this.name = name;
    this.salary = salary;
    this.position = position;
    this.type = 'employee';
  }
}
