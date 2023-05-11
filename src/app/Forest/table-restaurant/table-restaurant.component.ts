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
  
  listrestaurant: Restaurant[] = [];
  selectedRestaurant!:Restaurant;
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
    this.selectedRestaurant = {
      addressRestaurant : null,
      idRestaurant: null,
      nameRestaurant: null,
      nbrmaximal: null,
      offreRestaurants: null,
      tableRestaurants: null,
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

  editProduct(product: TableRestaurant) {
    this.ts.updateTableRestaurant(product).subscribe();
  }
  deleteProduct(id:any) {
    this.ts.deleteTableRestaurant(id).subscribe(() => this.getAllProducts())
  }

  addTableReservation(){
    const id =this.selectedRestaurant.idRestaurant ;
    console.log(this.Table);
    this.Table.resto = this.selectedRestaurant
    this.ts.addTableRestaurant(id,this.Table)
      .subscribe(response => {
        console.log(response);
      });
    this.getAllProducts();
  }
}
