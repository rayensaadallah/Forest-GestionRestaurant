import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccessRestaurant } from '../model/accessRestaurant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  readonly Restaurant_API_URL = 'http://localhost:8089/api/accessrestaurant/add';
  readonly GET_ALL_Restaurants_API_URL = 'http://localhost:8089/api/accessrestaurant/all';
  readonly DELETE_Restaurant_API_URL = 'http://localhost:8089/api/accessrestaurant/delete/';
  readonly GET_Restaurant_DETAILS__API_URL = 'http://localhost:8089/api/Restaurant/retriveRestaurant/';

  constructor(private httpClient: HttpClient) { }

  add(accessrestaurant: AccessRestaurant): Observable<any> {
    return this.httpClient.post<AccessRestaurant>(this.Restaurant_API_URL, accessrestaurant);
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
  

}
