import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
  }
  img = [
    {path: 'assets/imgs/7c53.png'},
    {path: 'assets/imgs/angular1.png'},
    {path: 'assets/imgs/images.jpeg'},
    {path: 'assets/imgs/Screenshot.png'},
    {path: 'assets/imgs/toptal.png'}
  ]
  

}
