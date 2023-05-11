import { Component, OnInit } from '@angular/core';
import { AccessRestaurant } from '../model/accessRestaurant';
import { AccesRestaurantService } from './acces-restaurant.service';
import { User } from '../model/user';
import { OffreRestaurant } from '../model/OffreRestaurant';

@Component({
  selector: 'app-acces-restaurant',
  templateUrl: './acces-restaurant.component.html',
  styleUrls: ['./acces-restaurant.component.scss']
})
export class AccesRestaurantComponent implements OnInit {



  listaccess: AccessRestaurant[] = [];
  access!: AccessRestaurant;
  user!: User;
  offreRestaurant!: OffreRestaurant;
  constructor(private as: AccesRestaurantService) { }

  ngOnInit(): void {
    console.log(this.access);
    this.getAllaccess();
    this.access = {
      dateEnd: null,
      dateStart: null,
      id_access_restaurant: null,
      offreRestaurant: null,
      payment: false,
      user: null
    }
    this.user = {
      accessRestaurants: null,
      CIN: null,
      DateNaissance: null,
      Email: null, firstname: null, gender: null, id_user: null, Lastname: null, Password: null, phone_number: null,
      typeUser: null,
    }
    this.offreRestaurant = {
      idOffreRestaurant: null,
      nameOffre: "",
      nbrDays: 0,
      breakfast: false,
      lunch: false,
      dinner: false,
      price: null,
      restaurant: null,
      accessRestaurants: null
    }
  }

  getAllaccess() {
    this.as.getAll().subscribe((response) => {
      this.listaccess = response;
    });
  }

  delete(id: any) {
    this.as.delete(id).subscribe((response) => {
      this.getAllaccess();
    });
  }

  edit(p: AccessRestaurant) {
    this.access.payment = true;
    this.as.update(p, p.id_access_restaurant).subscribe((response) => {
      this.listaccess = response;
    });
  }

}
