import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccessRestaurant } from '../model/accessRestaurant';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseUrl = 'http://localhost:8089/api/accessrestaurant';

  constructor(private httpClient: HttpClient) { }

}
