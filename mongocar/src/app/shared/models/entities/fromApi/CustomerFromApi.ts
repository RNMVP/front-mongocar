import CarModel from '../CarModel';

export default interface CustomerFromApi{
  id: string,
  name: string,
  email: string,
  cars: Set<CarModel>
  "type": "customer"
}
