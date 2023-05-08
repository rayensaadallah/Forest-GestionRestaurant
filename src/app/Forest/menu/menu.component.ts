import { Component, Input, OnInit } from '@angular/core';
import { MenuserviceService } from './menuservice.service';
import { Menu } from '../model/Menu';
import { NgClass } from '@angular/common';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  selectedFile: File;
  listmenu: Menu[] = [];
  selectedMenu: Menu ;

  constructor(private ms: MenuserviceService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.getAllMenu();
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
    console.log(this.selectedFile);
  }

  getAllMenu() {
    this.ms.getAllMenus().subscribe((response) => {
      this.listmenu = response;
    });
  }

  deletemenu(id: any) {
    this.ms.deleteMenu(id).subscribe((response) => {
      this.getAllMenu();
    });
  }
  editmenu(menu: Menu) {
    this.ms.updateMenu(menu).subscribe((response) => {
      this.listmenu = response;
    });
  }
}
