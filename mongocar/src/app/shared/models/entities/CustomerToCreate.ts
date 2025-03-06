import CarModel from './CarModel';
import UserModel from './UserModel';

export default class CustomerToCreate implements UserModel {
  id: string | null;
  name: string;
  email: string;
  telephone: string;
  password: string;
  type: 'customer' | 'employee';

  constructor(name: string, email: string, telephone: string, password: string) {
    this.id = null
    this.name = name;
    this.email = email;
    this.telephone = telephone;
    this.password = password;
    this.type = 'customer';
  }
}
