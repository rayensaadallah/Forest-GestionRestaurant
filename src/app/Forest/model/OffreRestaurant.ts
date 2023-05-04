import { AccessRestaurant } from './accessRestaurant';
import { Restaurant } from './Restaurant';

export interface OffreRestaurant {
  idOffreRestaurant: number;
  nameOffre: string;
  nbrDays: number;
  BREAKFAST: boolean;
  LUNCH: boolean;
  DINNER: boolean;
  price: number;
  accessRestaurants: AccessRestaurant[];
  restaurant: Restaurant;
}
