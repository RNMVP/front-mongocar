import UserModel from './entities/UserModel';

export default class EmployeeSubject implements UserModel{
  id: string | null;
  name: string;
  type: 'customer' | 'employee';

  constructor(name: string) {
    this.name = name;
    this.type = 'employee';
    this.id = null;
  }

}
