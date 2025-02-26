import UserModel from './entities/UserModel';

export default class CustomerSubject implements UserModel{
  id: string | null;
  name: string;
  type: 'customer' | 'employee';

  constructor(name: string) {
    this.name = name;
    this.type = 'customer';
    this.id = null;
  }

}
