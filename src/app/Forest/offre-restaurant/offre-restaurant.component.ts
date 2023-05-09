import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { OffreRestaurant } from '../model/OffreRestaurant';
import { OffreRestaurantService } from './offre-restaurant.service';
import { Restaurant } from '../model/Restaurant';

@Component({
  selector: 'app-offre-restaurant',
  templateUrl: './offre-restaurant.component.html',
  styleUrls: ['./offre-restaurant.component.scss']
})
export class OffreRestaurantComponent implements OnInit {

  listoffers: any;
  offreRestaurant!: OffreRestaurant;
  res!: Restaurant;
  form: boolean = false;
  closeResult!: string;

  constructor(private offreservice: OffreRestaurantService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllProducts();

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

