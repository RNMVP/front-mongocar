import CustomerSubject from '../shared/models/CustomerSubject';
import EmployeeSubject from '../shared/models/EmployeeSubject';

export default function MapUserFromApi (jsonUser: any){
  if(jsonUser.UserType === "customer"){
    return new CustomerSubject(jsonUser.id, jsonUser.name)
  }
  if(jsonUser.UserType === "employee"){
    return new EmployeeSubject(jsonUser.id, jsonUser.name, jsonUser.salary, jsonUser.position);
  }
  return null;
}
