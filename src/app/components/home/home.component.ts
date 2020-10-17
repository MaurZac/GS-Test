import { Component, OnInit } from '@angular/core';
import { ExamservService } from 'src/app/services/examserv.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
    newEmployees: any[] = [];
    page: number;
  constructor(private exam: ExamservService) { 
    this.exam.getEmployees()
    .subscribe((data: any) =>{
       console.log(data.data.employees);
       this.newEmployees = data.data.employees;
    });
 }
 findEmpl = '';
}
