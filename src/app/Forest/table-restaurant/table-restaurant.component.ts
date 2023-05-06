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
  form : boolean = false;
  Table!: TableRestaurant;
  closeResult! : string;

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
    this.ts.getAllProducts().subscribe(res => this.listtable = res)
  }

  addProduct(p: any){
    this.ts.addProduct(p).subscribe(() => {
      this.getAllProducts();
      this.form = false;
    });
  }

  editProduct(product : TableRestaurant){
    this.ts.editProduct(product).subscribe();
  }
  deleteProduct(idProduct : any){
    this.ts.deleteProduct(idProduct).subscribe(() => this.getAllProducts())
  }
  open(content: any) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  closeForm(){

  }
  cancel(){
    this.form = false;
  }
}
