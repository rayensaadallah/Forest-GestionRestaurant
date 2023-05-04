import { OffreRestaurant } from './OffreRestaurant';
import { TableRestaurant } from './TableRestaurant';

export interface Restaurant {
  idRestaurant: number;
  nameRestaurant: string;
  addressRestaurant: string;
  nbrmaximal: number;
  offreRestaurants: OffreRestaurant[];
  tableRestaurants: TableRestaurant[];
}
