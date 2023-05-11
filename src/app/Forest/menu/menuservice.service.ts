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
  readonly UPDATE_Restaurant_API_URL = 'http://localhost:8089/api/menu/edit';

  readonly GET_Restaurant_DETAILS__API_URL = 'http://localhost:8089/api/menu/retrive/';

  constructor(private httpClient: HttpClient) {

  }
  add(restaurant: Menu): Observable<any> {
    return this.httpClient.post<Menu>(this.Restaurant_API_URL, restaurant);
  }
  getAll() {
    return this.httpClient.get<Menu[]>(this.GET_ALL_Restaurants_API_URL);
  }
  delete(restaurantId: number) {
    return this.httpClient.delete(this.DELETE_Restaurant_API_URL + restaurantId);
  }
  getDetails(restaurantId): Observable<any> {
    return this.httpClient.get<any>(this.GET_Restaurant_DETAILS__API_URL + restaurantId);
  }
  update(restaurant: Menu): Observable<any> {
    return this.httpClient.put<any>(this.UPDATE_Restaurant_API_URL, restaurant);
  }
  private apiUrl = 'http://localhost:8089/api/menu';


  addMenu(menu: Menu, image: File): Observable<Menu> {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('description', menu.Description);
    formData.append('plate_name', menu.plateName);

    if (Object.prototype.toString.call(menu.timeMeal) === '[object Date]') {
      formData.append('time_meal', menu.timeMeal.toISOString().split('.')[0]);
    } else {
      console.error('Invalid timeMeal value:', menu.timeMeal);
    }




    formData.append('typeFood', menu.typeFood);
    formData.append('restaurant_id', menu.Restaurantid.toString());

    return this.httpClient.post<Menu>(`${this.apiUrl}/add/${menu.Restaurantid}`, formData);
  }


}
