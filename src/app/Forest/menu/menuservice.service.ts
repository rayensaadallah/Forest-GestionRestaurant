import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Menu } from '../model/Menu';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuserviceService {
  readonly API_URL = 'http://localhost:8089';

  constructor(private httpClient: HttpClient) { }

  getAllMenus(): Observable<any> {
    return this.httpClient.get(`${this.API_URL}/all-menu`);
  }

  addMenu(menu: Menu, idrestaurant: number): Observable<any> {
    const formData = new FormData();
    formData.append('image', menu.image);
    formData.append('description', menu.Description);
    formData.append('plate_name', menu.plateName);
    formData.append('time_meal', menu.timeMeal.toString());
    formData.append('typeFood', menu.typeFood);
    return this.httpClient.post(`${this.API_URL}/add-menu/${idrestaurant}`, formData);
  }

  editMenu(menu: Menu): Observable<any> {
    return this.httpClient.put(`${this.API_URL}/edit-menu`, menu);
  }

  deleteMenu(idMenu: number): Observable<any> {
    return this.httpClient.delete(`${this.API_URL}/delete-menu/${idMenu}`);
  }
}
