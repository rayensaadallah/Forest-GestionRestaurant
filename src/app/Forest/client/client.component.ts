import { Component, OnInit } from '@angular/core';
import { AccessRestaurant } from '../model/accessRestaurant';
import { AccesRestaurantService } from '../acces-restaurant/acces-restaurant.service';
import { OffreRestaurantService } from '../offre-restaurant/offre-restaurant.service';
import { OffreRestaurant } from '../model/OffreRestaurant';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  listoffers:any;
  listaccess: any;
  offreRestaurant!: OffreRestaurant;
  access!: AccessRestaurant
  constructor(private offreservice:OffreRestaurantService,private as: AccesRestaurantService) { }

  ngOnInit(): void {
    this.getAllProducts();
    this.access={
      dateEnd:null,
      dateStart:null,
      id:null,
      offreRestaurant:null,
      payment:null,
      User:null
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
  getAllProducts() {
    this.offreservice.getAllProducts().subscribe(res => this.listoffers = res)
  }
  getAllaccess() {
    this.as.getAll().subscribe((response) => {
      this.listaccess = response;
    });
  }
  add(idoffre : any) {
    if (this.access.id) {
      this.as.update(this.access).subscribe(
        (product) => {
          console.log('Access updated successfully', product);
        },
        (error) => {
          console.error('Failed to update access', error);
        }
      );
    } else {
      this.access.offreRestaurant=this.offreRestaurant;
      this.as.add(this.access).subscribe(
        (product: AccessRestaurant) => {
          console.log('Offre added ', product);
          this.getAllaccess();
        },
        (error) => {
          console.error('Failed to add the offer', error);
        }
      );
    }
  }
  delete(id: any) {
    this.as.delete(id).subscribe((response) => {
      this.getAllaccess();
    });
  }
}
