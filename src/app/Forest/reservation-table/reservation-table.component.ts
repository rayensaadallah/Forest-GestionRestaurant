import { Component, OnInit } from '@angular/core';
import { ReservationPlace } from '../model/ReservationPlace';
import { ReservationService } from './reservation.service';

@Component({
  selector: 'app-reservation-table',
  templateUrl: './reservation-table.component.html',
  styleUrls: ['./reservation-table.component.scss']
})
export class ReservationTableComponent implements OnInit {

  listreservation: any;
  reservation!: ReservationPlace
  constructor(private rs: ReservationService) { }

  ngOnInit(): void {
    this.getAllProducts();;

    this.reservation = {
      dateEnd: null,
      dateStart: null,
      idReservationPlace: null,
      iduser : null,
      menu : null,
      table :null
    }
  }
  getAllProducts(){
    this.rs.getAllProducts().subscribe(res => this.listreservation = res)
  }

}
