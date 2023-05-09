import { Component, OnInit } from '@angular/core';
import { AccessRestaurant } from '../model/accessRestaurant';
import { AccesRestaurantService } from './acces-restaurant.service';

@Component({
  selector: 'app-acces-restaurant',
  templateUrl: './acces-restaurant.component.html',
  styleUrls: ['./acces-restaurant.component.scss']
})
export class AccesRestaurantComponent implements OnInit {


  listaccess: any;
  access!: AccessRestaurant
  
  constructor(private as: AccesRestaurantService) { }

  ngOnInit(): void {
    this.getAllaccess();;

    this.access = {
      dateEnd: null,
      dateStart: null,
      id: null,
      offreRestaurant: null,
      payment: false,
      User: null
    }
  }
    
  
  getAllaccess() {
    this.as.getAll().subscribe((response) => {
      this.listaccess = response;
    });
  }

  add(restaurant: AccessRestaurant) {
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
      this.as.add(this.access).subscribe(
        (product: AccessRestaurant) => {
          console.log('restaurant added successfully', product);
          this.getAllaccess();
        },
        (error) => {
          console.error('Failed to add restaurant', error);
        }
      );
    }

  }

  delete(id: any) {
    this.as.delete(id).subscribe((response) => {
      this.getAllaccess();
    });
  }
  edit(restaurant: AccessRestaurant) {
    this.as.update(restaurant).subscribe((response) => {
      this.access = response;
    });
  }


  }
