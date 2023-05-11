import { Component, OnInit } from '@angular/core';
import { AccessRestaurant } from '../model/accessRestaurant';
import { AccesRestaurantService } from '../acces-restaurant/acces-restaurant.service';
import { OffreRestaurantService } from '../offre-restaurant/offre-restaurant.service';
import { OffreRestaurant } from '../model/OffreRestaurant';
import { TableRestaurant } from '../model/TableRestaurant';
import { TableService } from '../table-restaurant/table.service';
import { Menu } from '../model/Menu';
import { MenuserviceService } from '../menu/menuservice.service';
import { ReservationPlace } from '../model/ReservationPlace';
import { ReservationService } from '../reservation-table/reservation.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  listoffers: any;
  offreRestaurant!: OffreRestaurant;

  
  listaccess: any;
  access!: AccessRestaurant

  listmenu: any;
  menu!: Menu

  listtable: any;
  Table!: TableRestaurant;

  
  reservationtable!: ReservationPlace;
  constructor(private rs: ReservationService,private ms: MenuserviceService, private ts: TableService, private offreservice: OffreRestaurantService, private as: AccesRestaurantService) { }

  ngOnInit(): void {
    this.getAllMenu();
    this.getAllaccess();
    this.getAllOffre();
    this.getAllTable();
    this.menu={
      Description:null,
      idMenu:null,
      plateName:null,
      Restaurantid:null,
      timeMeal:null,
      typeFood:null,
      image:null,
    }
    this.reservationtable={
      confirmed: false,
      dateEnd: null,
      dateStart:null,
      idReservationPlace:null,
      iduser:null,
      menu:null,
      table:null,
    }
    this.access = {
      dateEnd: null,
      dateStart: null,
      id_access_restaurant: null,
      offreRestaurant: null,
      payment: null,
      user: null
    }
    this.offreRestaurant = {
      idOffreRestaurant: 0,
      nameOffre: "",
      nbrDays: 0,
      breakfast: false,
      lunch: false,
      dinner: false,
      price: null,
      restaurant: null,
      accessRestaurants: null
    }
    this.Table = {
      block: null,
      idTableRestaurant: null,
      max: null,
      now: null,
      number: null,
      reservationPlaces: null,
      resto: null,
    }
  }


  getAllMenu() {
    this.ms.getAll().subscribe(res => this.listmenu = res)
  }
  getAllTable() {
    this.ts.getAllTableRestaurants().subscribe(res => this.listtable = res)
  }
  getAllOffre() {
    this.offreservice.getAllProducts().subscribe(res => this.listoffers = res)
  }
  getAllaccess() {
    this.as.getAll().subscribe((response) => { this.listaccess = response; });
  }
  
  onSubmitAccess(idoffre:any): void {
    this.access.payment = false;
    const iduser = 1;
    //const idoffre =this.offreRestaurant.idOffreRestaurant;
    this.as.addAccessRestaurant(this.access, iduser, idoffre)
      .subscribe(response => {
        console.log('Access added successfully', response);
        // do something with the response if needed
      }, error => {
        console.error('Error adding access', error);
        // handle the error if needed
      });
  }


  addTableReservation(){
    const iduser = 1;
    this.rs.addReservationPlace(this.reservationtable,iduser,this.menu.idMenu, this.Table.idTableRestaurant)
      .subscribe(response => {
        console.log('Reservation added successfully', response);
      }, error => {
        console.error('Error adding Reservation', error);
        // handle the error if needed
      });
  }

}
