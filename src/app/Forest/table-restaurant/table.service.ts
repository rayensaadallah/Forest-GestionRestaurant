import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { TableRestaurant } from '../model/TableRestaurant';

@Injectable({
  providedIn: 'root'
})
export class TableService {


  readonly baseUrl = 'http://localhost:8089/api/table';

  constructor(private http: HttpClient) {}

  addTableRestaurant(idrestaurant: number, reservationPlace: TableRestaurant): Observable<TableRestaurant> {
    const url = `${this.baseUrl}/add/${idrestaurant}`;
    return this.http.post<TableRestaurant>(url, reservationPlace);
  }

  getAllTableRestaurants(): Observable<TableRestaurant[]> {
    const url = `${this.baseUrl}/all`;
    return this.http.get<TableRestaurant[]>(url);
  }

  deleteTableRestaurant(id: number): Observable<any> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.http.delete(url);
  }

  updateTableRestaurant(table: TableRestaurant): Observable<TableRestaurant> {
    const url = `${this.baseUrl}/edit`;
    return this.http.put<TableRestaurant>(url, table);
  }

  getTableRestaurantById(id: number): Observable<TableRestaurant> {
    const url = `${this.baseUrl}/retriveRestaurant/${id}`;
    return this.http.get<TableRestaurant>(url);
  }
}

