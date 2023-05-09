import { Component, OnInit } from '@angular/core';
import { TableRestaurant } from '../model/TableRestaurant';
import { TableService } from './table.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Restaurant } from '../model/Restaurant';
import { RestaurantService } from '../restaurant/restaurant.service';

@Component({
  selector: 'app-table-restaurant',
  templateUrl: './table-restaurant.component.html',
  styleUrls: ['./table-restaurant.component.scss']
})
export class TableRestaurantComponent implements OnInit {

  listtable: any;
  Table!: TableRestaurant;
  restaurantId: number;
  http: any;
  listrestaurant: Restaurant[] = [];
  constructor(private ts: TableService, private rs: RestaurantService, private modalService: NgbModal) { }

  ngOnInit(): void {

    this.getAllProducts();;
    this.getAllRestaurant();
    this.Table = {
      block: null,
      idTableRestaurant: null,
      max: null,
      now: null,
      number: null,
      reservationPlaces: null,
      resto: null
    }
  }

  getAllRestaurant() {
    this.rs.getAllRestaurants().subscribe((response) => {
      this.listrestaurant = response;
    });
  }
  getAllProducts() {
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

  editProduct(product: TableRestaurant) {
    this.ts.updateTableRestaurant(product).subscribe();
  }
  deleteProduct(idProduct: any) {
    this.ts.deleteTableRestaurant(idProduct).subscribe(() => this.getAllProducts())
  }

  addTableReservation2() {
    this.http.post('http://localhost:8089/api/table', this.Table).subscribe(
      response => {
        console.log(response);
        // Add any success message or redirect logic here
      },
      error => {
        console.log(error);
        // Add any error message or handling logic here
      }
    );
  }
}
