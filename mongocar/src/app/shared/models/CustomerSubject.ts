import UserModel from './entities/UserModel';

export default class CustomerSubject implements UserModel{
  id: string | null;
  name: string;
  type: 'customer' | 'employee';

  constructor(id: string, name: string) {
    this.name = name;
    this.type = 'customer';
    this.id = id;
  }

  static fromJson(json: any): CustomerSubject {
    return new CustomerSubject(json.id || null, json.name || '');
  }

}
