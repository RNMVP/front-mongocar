import UserModel from './UserModel';

export default class EmployeeModel implements UserModel{
  id: string | null;
  name: string;
  salary: number;
  position: string;

  constructor(name: string, salary: number, position: string) {
    this.id = null;
    this.name = name;
    this.salary = salary;
    this.position = position;
  }
}
