import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Menu } from '../model/Menu';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuserviceService {

  readonly Restaurant_API_URL = 'http://localhost:8089/api/menu/add';
  readonly GET_ALL_Restaurants_API_URL = 'http://localhost:8089/api/menu/all';
  readonly DELETE_Restaurant_API_URL = 'http://localhost:8089/api/menu/delete/';
  readonly UPDATE_Restaurant_API_URL='http://localhost:8089/api/menu/edit';


  readonly GET_Restaurant_DETAILS__API_URL = 'http://localhost:8089/api/menu/retriveRestaurant/';

  private apiURL = 'http://localhost:8080/api/menu'; // Replace with your Spring Boot application URL

  constructor(private httpClient: HttpClient) {}

  
  addMenu2(menu: FormData, restaurant_id: number): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    
    return this.httpClient.post(`${this.apiURL}/add/${restaurant_id}`, menu, { headers: headers });
  }
  addMenu(restaurant: Menu): Observable<any> {
    return this.httpClient.post<Menu>(this.Restaurant_API_URL, restaurant);
  }
  getAllMenus(){
    return this.httpClient.get<Menu[]>(this.GET_ALL_Restaurants_API_URL);
  }
  deleteMenu(restaurantId: number){
    return this.httpClient.delete(this.DELETE_Restaurant_API_URL + restaurantId);
  }
  getMenuDetails(restaurantId):Observable<any>{
    return this.httpClient.get<any>(this.GET_Restaurant_DETAILS__API_URL + restaurantId);
  }
  updateMenu(restaurant:Menu):Observable<any>{
    return this.httpClient.put<any> (this.UPDATE_Restaurant_API_URL , restaurant);
  }
}
