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
  paymentchange(){
    this.access.payment = true;
    this.as.update(this.access,this.access.id).subscribe((response) => {
      this.access = response; });
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
  


  }
