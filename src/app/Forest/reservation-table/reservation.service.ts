import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReservationPlace } from '../model/ReservationPlace';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {


  readonly Restaurant_API_URL = 'http://localhost:8089/api/reservationplace/add';
  readonly GET_ALL_Restaurants_API_URL = 'http://localhost:8089/api/reservationplace/all';
  readonly DELETE_Restaurant_API_URL = 'http://localhost:8089/api/reservationplace/delete/';
  readonly UPDATE_Restaurant_API_URL='http://localhost:8089/api/reservationplace/edit';

  readonly GET_Restaurant_DETAILS__API_URL = 'http://localhost:8089/api/reservationplace/retriveRestaurant/';
  readonly apiUrl = 'http://localhost:8089/api/reservationplace';

  constructor(private httpClient: HttpClient) {

  }

  addReservationPlace(reservationPlace: ReservationPlace, iduser: number, idmenu: number, idtable: number): Observable<ReservationPlace> {
    const url = `${this.apiUrl}/add/${iduser}/${idmenu}/${idtable}`;
    return this.httpClient.post<ReservationPlace>(url, reservationPlace);
  }

  add(restaurant: ReservationPlace): Observable<any> {
    return this.httpClient.post<ReservationPlace>(this.Restaurant_API_URL, restaurant);
  }
  getAll(){
    return this.httpClient.get<ReservationPlace[]>(this.GET_ALL_Restaurants_API_URL);
  }
  deleteReservationplace(restaurantId: number){
    return this.httpClient.delete(this.DELETE_Restaurant_API_URL + restaurantId);
  }
  getresercaitonplaceDetails(restaurantId):Observable<any>{
    return this.httpClient.get<any>(this.GET_Restaurant_DETAILS__API_URL + restaurantId);
  }
  updateReservationplace(restaurant:ReservationPlace):Observable<any>{
    return this.httpClient.put<any> (this.UPDATE_Restaurant_API_URL , restaurant);
  }

}
