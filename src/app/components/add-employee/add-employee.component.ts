import { Component, OnInit } from '@angular/core';
import { ExamservService } from 'src/app/services/examserv.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private exam: ExamservService) { }
  
  ngOnInit(): void {
  }

  uploadEmployee(name:string, last_name:string,selectedDate: Date){
    
    this.exam.postEmployee(name,last_name, selectedDate)
    .subscribe(data => {
      console.log(data);
    })

  }

}
