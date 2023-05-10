import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { OffreRestaurant } from '../model/OffreRestaurant';
import { OffreRestaurantService } from './offre-restaurant.service';
import { Restaurant } from '../model/Restaurant';
import { RestaurantService } from '../restaurant/restaurant.service';

@Component({
  selector: 'app-offre-restaurant',
  templateUrl: './offre-restaurant.component.html',
  styleUrls: ['./offre-restaurant.component.scss']
})
export class OffreRestaurantComponent implements OnInit {

  listoffers: any;
  offreRestaurant!: OffreRestaurant;
  res!: Restaurant;
  listrestaurant: Restaurant[] = [];

  constructor(private rs: RestaurantService, private offreservice: OffreRestaurantService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllRestaurant();
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
  getAllRestaurant() {
    this.rs.getAllRestaurants().subscribe((response) => {
      this.listrestaurant = response;
    });
  }

  deleteoffre(id: any) {
    this.offreservice.delete(id).subscribe((response) => {
      this.getAllProducts();
    });
  }

  getAllProducts() {
    this.offreservice.getAllProducts().subscribe(res => this.listoffers = res)
  }

  onSubmit(): void {
    const idrestaurant = 1; // replace with actual restaurant ID
    this.offreservice.addOffreRestaurant(idrestaurant, this.offreRestaurant)
      .subscribe(response => {
        console.log(response);
      });
    this.getAllProducts();
  }

  editProduct(product: OffreRestaurant) {
    this.offreservice.editProduct(product).subscribe();
  }

}

