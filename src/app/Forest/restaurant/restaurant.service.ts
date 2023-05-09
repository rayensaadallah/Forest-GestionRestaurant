import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurant } from '../model/Restaurant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  readonly Restaurant_API_URL = 'http://localhost:8089/api/Restaurant/add';
  readonly GET_ALL_Restaurants_API_URL = 'http://localhost:8089/api/Restaurant/all';
  readonly DELETE_Restaurant_API_URL = 'http://localhost:8089/api/Restaurant/delete/';
  readonly UPDATE_Restaurant_API_URL='http://localhost:8089/api/Restaurant/edit';

  readonly GET_Restaurant_DETAILS__API_URL = 'http://localhost:8089/api/Restaurant/retriveRestaurant/';

  constructor(private httpClient: HttpClient) {

  }
  addRestaurant(restaurant: Restaurant): Observable<any> {
    return this.httpClient.post<Restaurant>(this.Restaurant_API_URL, restaurant);
  }
  getAllRestaurants(){
    return this.httpClient.get<Restaurant[]>(this.GET_ALL_Restaurants_API_URL);
  }
  deleteRestaurant(restaurantId: number){
    return this.httpClient.delete(this.DELETE_Restaurant_API_URL + restaurantId);
  }
  getRestaurantDetails(restaurantId):Observable<any>{
    return this.httpClient.get<any>(this.GET_Restaurant_DETAILS__API_URL + restaurantId);
  }
  updateRestaurant(restaurant:Restaurant):Observable<any>{
    return this.httpClient.put<any> (this.UPDATE_Restaurant_API_URL , restaurant);
  }

}
