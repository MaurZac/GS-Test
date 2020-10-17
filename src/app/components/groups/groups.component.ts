import { Component, OnInit } from '@angular/core';
import { ExamservService } from 'src/app/services/examserv.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {DragDropModule} from '@angular/cdk/drag-drop';



@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  groups: any[] = [];
  lista: any[] = [];
  id: number ;
  constructor(private exam: ExamservService) { 
    this.exam.getGroups()
    .subscribe((data: any) =>{
       //console.log(data.data.groups);
       this.groups = data.data.groups;
    }); 
    
  }

  getListas(id:number){
    this.exam.getGroupsbyId(id)
    .subscribe((data: any)=>{
       
      console.log(data);
    }) 
  }
  

  done = [{
    id: 1, name: ""
  }
  ];
  
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  findgroup = '';
  ngOnInit(): void {
  }

}
