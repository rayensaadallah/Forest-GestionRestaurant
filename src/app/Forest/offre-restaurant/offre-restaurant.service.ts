import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OffreRestaurantService {

  readonly API_URL = 'http://localhost:8089/api/offre-restaurant';
  
  constructor(private httpClient: HttpClient) { }

  getAllProducts() {
    return this.httpClient.get(`${this.API_URL}/all`)
  }
  addProduct(product : any) {
    return this.httpClient.post(`${this.API_URL}/add`, product)
  }
  editProduct(product : any){
    return this.httpClient.put(`${this.API_URL}/edit`, product)
  }
  deleteProduct(idProduct : any){
    return  this.httpClient.delete(`${this.API_URL}/delete/${idProduct}`)
  }
}
