import CarModel from '../CarModel';

export default interface CustomerFromApi{
  id: string
  name: string
  email: string
  telephone: string
  cars: Set<CarModel>
}
