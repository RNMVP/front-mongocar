import UserModel from './entities/UserModel';

export default class EmployeeSubject implements UserModel{
  id: string | null;
  name: string;
  salary: number;
  position: string;
  type: 'customer' | 'employee';

  constructor(
    id: string | null,
    name: string,
    salary: number,
    position: string,
  ) {
    this.name = name;
    this.type = 'employee';
    this.id = id;
    this.salary = salary;
    this.position = position
  }

}
