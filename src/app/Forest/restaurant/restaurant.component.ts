import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../model/Restaurant';
import { RestaurantService } from './restaurant.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  listrestaurant: Restaurant[] = [];
  selectedRestaurant: Restaurant;

  constructor(private rs: RestaurantService,private route: ActivatedRoute) { }



  ngOnInit(): void {
    this.getAllRestaurant();
    const idRestaurant = this.route.snapshot.paramMap.get('idRestaurant');
    if (idRestaurant) {
      this.rs.getRestaurantDetails(idRestaurant).subscribe(
        (idRestaurant) => {
          this.selectedRestaurant = idRestaurant;
        },
        (error) => {
          console.error('Failed to get order details', error);
        }
      );
    }
    console.log(this.selectedRestaurant);
  }

  getAllRestaurant() {
    this.rs.getAllRestaurants().subscribe((response) => {
      this.listrestaurant = response;
    });
  }

  addrestaurant(restaurant: Restaurant) {
    if (this.selectedRestaurant.idRestaurant) {
      this.rs.updateRestaurant(this.selectedRestaurant).subscribe(
        (product) => {

          console.log('restaurant updated successfully', product);
        },
        (error) => {
          console.error('Failed to update restaurant', error);
        }
      );
    } else {
      this.rs.addRestaurant(this.selectedRestaurant).subscribe(
        (product: Restaurant) => {
          console.log('restaurant added successfully', product);
        },
        (error) => {
          console.error('Failed to add restaurant', error);
        }
      );
    }
  }

  deleterestaurant(id) {
    this.rs.deleteRestaurant(id).subscribe((response) => {
      this.getAllRestaurant();
    });
  }
  editrestaurant(restaurant: Restaurant) {
    this.rs.updateRestaurant(restaurant).subscribe((response) => {
      this.listrestaurant = response;
    });
  }
}


