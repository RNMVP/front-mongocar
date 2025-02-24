import UserModel from './UserModel';

export default interface EmployeeModel extends UserModel{
  salary: number;
  position: string;
}
