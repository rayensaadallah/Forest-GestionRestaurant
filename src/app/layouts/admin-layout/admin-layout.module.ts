import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { UserComponent }            from '../../pages/user/user.component';
import { TableComponent }           from '../../pages/table/table.component';
import { TypographyComponent }      from '../../pages/typography/typography.component';
import { IconsComponent }           from '../../pages/icons/icons.component';
import { MapsComponent }            from '../../pages/maps/maps.component';
import { NotificationsComponent }   from '../../pages/notifications/notifications.component';
import { UpgradeComponent }         from '../../pages/upgrade/upgrade.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RestaurantComponent } from 'app/Forest/restaurant/restaurant.component';
import { OffreRestaurantComponent } from 'app/Forest/offre-restaurant/offre-restaurant.component';
import { AccesRestaurantComponent } from 'app/Forest/acces-restaurant/acces-restaurant.component';
import { MenuComponent } from 'app/Forest/menu/menu.component';
import { ReservationTableComponent } from 'app/Forest/reservation-table/reservation-table.component';
import { TableRestaurantComponent } from 'app/Forest/table-restaurant/table-restaurant.component';
import { RestaurantService } from 'app/Forest/restaurant/restaurant.service';
import { HttpClientModule } from '@angular/common/http';
import { ClientComponent } from 'app/Forest/client/client.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
@NgModule({
  imports: [
    BsDatepickerModule.forRoot(),
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    HttpClientModule,
  ],
  providers:[
    RestaurantService
  ],
  declarations: [
    ClientComponent,
    TableRestaurantComponent,
    ReservationTableComponent,
    MenuComponent,
    AccesRestaurantComponent,
    OffreRestaurantComponent,
    RestaurantComponent,
    DashboardComponent,
    UserComponent,
    TableComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
  ]
})

export class AdminLayoutModule {}
