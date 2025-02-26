import CarModel from './CarModel';
import UserModel from './UserModel';

export default class CustomerModel implements UserModel {
  id: string | null;
  name: string;
  email: string;
  cars: Set<CarModel>;
  password: string;

  constructor(name: string, email: string, password: string) {
    this.id = null
    this.name = name;
    this.email = email;
    this.password = password;
    this.cars = new Set<CarModel>();
  }
}
