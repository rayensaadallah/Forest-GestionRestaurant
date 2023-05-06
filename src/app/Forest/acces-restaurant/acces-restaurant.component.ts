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
    this.getAllProducts();;

    this.access = {
      dateEnd: null,
      dateStart: null,
      id: null,
      offreRestaurant: null,
      payment: false,
      User: null
    }
  }
    getAllProducts(){
      this.as.getAllProducts().subscribe(res => this.listaccess = res)
    }

  }
