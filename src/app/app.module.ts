import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HttpClientModule} from  '@angular/common/http'
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination'; 
//routes
import { ROUTES } from './app.routes';
import { FilterPipe } from './pipes/filter.pipe';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
//date picker
import {DpDatePickerModule} from 'ng2-date-picker';
import { GroupsComponent } from './components/groups/groups.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CarouselComponent,
    FilterPipe,
    AddEmployeeComponent,
    GroupsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash: false}),
    IvyCarouselModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    DpDatePickerModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
