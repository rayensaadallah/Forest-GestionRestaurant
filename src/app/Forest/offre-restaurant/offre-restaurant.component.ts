import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { OffreRestaurant } from '../model/OffreRestaurant';
import { OffreRestaurantService } from './offre-restaurant.service';

@Component({
  selector: 'app-offre-restaurant',
  templateUrl: './offre-restaurant.component.html',
  styleUrls: ['./offre-restaurant.component.scss']
})
export class OffreRestaurantComponent implements OnInit {


  listoffers : any; 
  form : boolean = false;
   offreRestaurant!: OffreRestaurant;
   closeResult! : string;

  constructor(private offreservice : OffreRestaurantService, private modalService: NgbModal) { }

  ngOnInit(): void {
    //this.getAllProducts();;

    this.offreRestaurant = {
      idOffreRestaurant: null,
      nameOffre: null,
      nbrDays: null,
      BREAKFAST: null,
      LUNCH: null,
      DINNER: null,
      price: null,
      restaurant : null,
      accessRestaurants : null
    }
  }

  getAllProducts(){
    this.offreservice.getAllProducts().subscribe(res => this.listoffers = res)
  }

  addProduct(p: any){
    this.offreservice.addProduct(p).subscribe(() => {
      this.getAllProducts();
      this.form = false;
    });
  }

  editProduct(product : OffreRestaurant){
    this.offreservice.editProduct(product).subscribe();
  }
  deleteProduct(idProduct : any){
    this.offreservice.deleteProduct(idProduct).subscribe(() => this.getAllProducts())
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

