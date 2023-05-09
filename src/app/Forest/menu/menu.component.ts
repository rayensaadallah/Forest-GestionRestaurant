import { Component, Input, OnInit } from '@angular/core';
import { MenuserviceService } from './menuservice.service';
import { Menu } from '../model/Menu';
import { NgClass } from '@angular/common';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from '../model/Restaurant';
import { RestaurantService } from '../restaurant/restaurant.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  selectedFile: File;
  listmenu: Menu[] = [];
  selectedMenu: Menu ;
  listrestaurant: Restaurant[] = [];

  
  constructor(private rs: RestaurantService,private ms: MenuserviceService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.getAllMenu();
    this.getAllRestaurant();
    this.selectedMenu = {
      Description: null,
      idMenu: null,
       plateName: null, 
       Restaurantid: null, 
       timeMeal: null, 
       typeFood: null,
        image: null,
    }
    console.log(this.selectedMenu);
    
  }
  getAllRestaurant() {
    this.rs.getAllRestaurants().subscribe((response) => {
      this.listrestaurant = response;
    });
  }

  onSubmit(): void {
    const idrestaurant = 1; // replace with actual restaurant ID
    this.ms.add(this.selectedMenu)
      .subscribe(response => {
        console.log(response);
      });
    this.getAllMenu();
  }

  getAllMenu() {
    this.ms.getAll().subscribe((response) => {
      this.listmenu = response;
    });
  }

  deletemenu(id: any) {
    this.ms.delete(id).subscribe((response) => {
      this.getAllMenu();
    });
  }
  editmenu(menu: Menu) {
    this.ms.update(menu).subscribe((response) => {
      this.listmenu = response;
    });
  }
}
