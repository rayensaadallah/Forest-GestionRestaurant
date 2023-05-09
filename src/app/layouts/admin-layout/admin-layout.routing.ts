import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { RestaurantComponent } from 'app/Forest/restaurant/restaurant.component';
import { OffreRestaurantComponent } from 'app/Forest/offre-restaurant/offre-restaurant.component';
import { AccesRestaurantComponent } from 'app/Forest/acces-restaurant/acces-restaurant.component';
import { MenuComponent } from 'app/Forest/menu/menu.component';
import { ReservationTableComponent } from 'app/Forest/reservation-table/reservation-table.component';
import { TableRestaurantComponent } from 'app/Forest/table-restaurant/table-restaurant.component';
import { ClientComponent } from 'app/Forest/client/client.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user', component: UserComponent },
    { path: 'Restaurant', component: RestaurantComponent },
    { path: 'OffreRestaurant', component: OffreRestaurantComponent },
    { path: 'AccessRestaurant', component: AccesRestaurantComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'ReservationTable', component: ReservationTableComponent },
    { path: 'TableRestaurant', component: TableRestaurantComponent },
    { path: 'Client', component: ClientComponent }
];
