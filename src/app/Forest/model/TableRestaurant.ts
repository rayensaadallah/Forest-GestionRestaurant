import { ReservationPlace } from './ReservationPlace';
import { Restaurant } from './Restaurant';

export interface TableRestaurant {
  idTableRestaurant: number;
  number: number;
  block: string;
  now: number;
  max: number;
  resto: Restaurant;
  reservationPlaces: ReservationPlace[];
}

