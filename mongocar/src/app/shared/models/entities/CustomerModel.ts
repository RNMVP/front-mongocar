import CarModel from './CarModel';
import UserModel from './UserModel';

export default interface CustomerModel extends UserModel {
  email: string;
  cars: Set<CarModel>;
  password: string;
}
