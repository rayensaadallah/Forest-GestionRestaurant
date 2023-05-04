import { TableRestaurant } from './TableRestaurant';
import { Menu } from './Menu';

export interface ReservationPlace {
  idReservationPlace: number;
  dateStart: Date;
  dateEnd: Date;
  iduser: number;
  table: TableRestaurant;
  menu: Menu;

  
}
