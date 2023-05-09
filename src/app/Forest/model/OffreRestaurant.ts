import { AccessRestaurant } from './accessRestaurant';
import { Restaurant } from './Restaurant';

export class OffreRestaurant {
  idOffreRestaurant: number;
  nameOffre: string;
  nbrDays: number;
  breakfast: boolean;
  lunch: boolean;
  dinner: boolean;
  price: number;
  accessRestaurants: AccessRestaurant[];
  restaurant: Restaurant;
}
