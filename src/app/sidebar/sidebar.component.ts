import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Home', icon: 'nc-bank', class: '' },
    { path: '/Restaurant', title: 'Restaurant', icon: 'nc-diamond', class: '' },
    { path: '/OffreRestaurant', title: 'Offre Restaurant', icon: 'nc-pin-3', class: '' },
    { path: '/menu', title: 'Menus', icon: 'nc-bell-55', class: '' },
    { path: '/AccessRestaurant', title: 'Access Restaurant', icon: 'nc-bell-55', class: '' },
    { path: '/ReservationTable', title: 'Reservation Tables', icon: 'nc-bell-55', class: '' },
    { path: '/TableRestaurant', title: 'Tables in Restaurant', icon: 'nc-bell-55', class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
