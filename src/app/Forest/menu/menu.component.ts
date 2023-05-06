import { Component, OnInit } from '@angular/core';
import { MenuserviceService } from './menuservice.service';
import { Menu } from '../model/Menu';
import { NgClass } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  
  constructor(private ms: MenuserviceService) { }
  ngOnInit(): void {
   
  }

}
