import { OffreRestaurant } from './OffreRestaurant';
import { TableRestaurant } from './TableRestaurant';

export class Restaurant {
  idRestaurant?: number;
  nameRestaurant?: string;
  addressRestaurant?: string;
  nbrmaximal?: number;
  offreRestaurants?: OffreRestaurant[];
  tableRestaurants?: TableRestaurant[];
}
