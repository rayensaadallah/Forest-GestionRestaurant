import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccessRestaurant } from '../model/accessRestaurant';

@Injectable({
  providedIn: 'root'
})
export class AccesRestaurantService {

  readonly Restaurant_API_URL = 'http://localhost:8089/api/accessrestaurant/add';
  readonly GET_ALL_Restaurants_API_URL = 'http://localhost:8089/api/accessrestaurant/all';
  readonly DELETE_Restaurant_API_URL = 'http://localhost:8089/api/accessrestaurant/delete/';
  readonly UPDATE_Restaurant_API_URL = 'http://localhost:8089/api/accessrestaurant/update/';

  readonly GET_Restaurant_DETAILS__API_URL = 'http://localhost:8089/api/Restaurant/retriveRestaurant/';
  private baseUrl = 'http://localhost:8089/api/accessrestaurant';
  constructor(private httpClient: HttpClient) { }
  
  addAccessRestaurant(accessRestaurant: AccessRestaurant, iduser: number, idoffre: number): Observable<AccessRestaurant> {
    const url = `${this.baseUrl}/add/${iduser}/${idoffre}`;
    return this.httpClient.post<AccessRestaurant>(url, accessRestaurant);
  }

  getAll() {
    return this.httpClient.get<AccessRestaurant[]>(this.GET_ALL_Restaurants_API_URL);
  }
  delete(Id: number) {
    return this.httpClient.delete(this.DELETE_Restaurant_API_URL + Id);
  }
  getDetails(Id): Observable<any> {
    return this.httpClient.get<any>(this.GET_Restaurant_DETAILS__API_URL + Id);
  }
  update(accessrestaurant: AccessRestaurant,ID:any): Observable<any> {
    return this.httpClient.put<any>(this.UPDATE_Restaurant_API_URL + ID, accessrestaurant);
  }

}
