import { OffreRestaurant } from './OffreRestaurant';

export class AccessRestaurant {
  id_access_restaurant: number;
  dateStart: Date;
  dateEnd: Date;
  payment: Boolean;
  user: number;
  offreRestaurant: OffreRestaurant;
}
