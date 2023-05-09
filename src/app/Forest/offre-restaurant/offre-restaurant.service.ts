import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OffreRestaurant } from '../model/OffreRestaurant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffreRestaurantService {
  readonly DELETE_Restaurant_API_URL = 'http://localhost:8089/api/offrerestaurant/delete/';
  readonly API_URL = 'http://localhost:8089/api/offrerestaurant';
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
  addOffreRestaurant(idrestaurant: number, offreRestaurant: OffreRestaurant): Observable<OffreRestaurant> {
    const url = `${this.API_URL}/${idrestaurant}/add`;
    return this.httpClient.post<OffreRestaurant>(url, offreRestaurant);
  }
  delete(Idoffre: number){
    return this.httpClient.delete(this.DELETE_Restaurant_API_URL + Idoffre);
  }
}
