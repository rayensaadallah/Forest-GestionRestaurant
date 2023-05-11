import { Component, OnInit } from '@angular/core';
import { ReservationPlace } from '../model/ReservationPlace';
import { ReservationService } from './reservation.service';

@Component({
  selector: 'app-reservation-table',
  templateUrl: './reservation-table.component.html',
  styleUrls: ['./reservation-table.component.scss']
})
export class ReservationTableComponent implements OnInit {
  
  listreservation: ReservationPlace[] = [];
  reservation!: ReservationPlace
  constructor(private rs: ReservationService) { }

  ngOnInit(): void {
    this.getAllRestaurant();;

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

}
