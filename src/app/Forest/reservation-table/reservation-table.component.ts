import { Component, OnInit } from '@angular/core';
import { ReservationPlace } from '../model/ReservationPlace';
import { ReservationService } from './reservation.service';
import { Menu } from '../model/Menu';
import { TableRestaurant } from '../model/TableRestaurant';

@Component({
  selector: 'app-reservation-table',
  templateUrl: './reservation-table.component.html',
  styleUrls: ['./reservation-table.component.scss']
})
export class ReservationTableComponent implements OnInit {
  
  listreservation: ReservationPlace[] = [];
  reservation!: ReservationPlace;

  menu! : Menu;
  Table! : TableRestaurant;
  constructor(private rs: ReservationService) { }

  ngOnInit(): void {
    this.getAllRestaurant();
    this.Table = {
      block: null,
      idTableRestaurant: null,
      max: null,
      now: null,
      number: null,
      reservationPlaces: null,
      resto: null
    }
    this.menu = {
      Description: null,
      idMenu: null,
      plateName: null,
      Restaurantid: null,
      timeMeal: null,
      typeFood: null,
      image: null,
    }
    this.reservation = {confirmed: false,
      dateEnd: null,
      dateStart: null,
      idReservationPlace: null,
      iduser : null,
      menu : null,
      table :null
    }
  }
  getAllRestaurant() {
    this.rs.getAll().subscribe((response) => {
      this.listreservation = response;
    });
  }


  deleteProduct(id:any) {
    this.rs.deleteReservationplace(id).subscribe(() => this.getAllRestaurant())
  }
}
