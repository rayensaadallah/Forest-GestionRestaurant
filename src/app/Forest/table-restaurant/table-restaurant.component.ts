import { Component, OnInit } from '@angular/core';
import { TableRestaurant } from '../model/TableRestaurant';
import { TableService } from './table.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-table-restaurant',
  templateUrl: './table-restaurant.component.html',
  styleUrls: ['./table-restaurant.component.scss']
})
export class TableRestaurantComponent implements OnInit {

  listtable : any; 
  Table!: TableRestaurant;
  restaurantId: number;

  constructor(private ts : TableService,  private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllProducts();;

    this.Table = {
  block:  null,
  idTableRestaurant : null,
  max: null,
  now: null,
  number: null,
  reservationPlaces : null,
  resto: null
    }
  }

  getAllProducts(){
    this.ts.getAllTableRestaurants().subscribe(res => this.listtable = res)
  }

  addTableReservation() {
    console.log('Restaurant ID:', this.restaurantId); // add this line
    this.ts.addTableRestaurant(this.restaurantId, this.Table)
      .subscribe(res => {
        console.log(res); // log the response from the API
        // reset the form and table reservation object
        this.Table = new TableRestaurant();
        this.restaurantId = null;
      }, error => {
        console.error(error); // log any errors
      });
  }
  
  editProduct(product : TableRestaurant){
    this.ts.updateTableRestaurant(product).subscribe();
  }
  deleteProduct(idProduct : any){
    this.ts.deleteTableRestaurant(idProduct).subscribe(() => this.getAllProducts())
  }
}
