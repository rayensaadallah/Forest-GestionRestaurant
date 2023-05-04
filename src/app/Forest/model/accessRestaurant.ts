import { OffreRestaurant } from './OffreRestaurant';

export interface AccessRestaurant {
  id: number;
  dateStart: Date;
  dateEnd: Date;
  payment: Boolean;
  User: number;
  offreRestaurant: OffreRestaurant;
}
