import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { GroupsComponent } from './components/groups/groups.component';
import { HomeComponent } from './components/home/home.component';

export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent },
    {path: 'carousel', component: CarouselComponent},
    {path: 'addemployee', component: AddEmployeeComponent},
    {path: 'groups', component: GroupsComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
    
];