import { AccessRestaurant } from "./accessRestaurant";

export interface User {
    id_user: number;
    firstname: string;
    Lastname: string;
    Email: string;
    Password: string;
    phone_number: number;
    gender: string;
    CIN: number;
    DateNaissance: Date;
    typeUser: string;
    accessRestaurants: AccessRestaurant[];
  }
  