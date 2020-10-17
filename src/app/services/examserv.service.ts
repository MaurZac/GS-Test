import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ExamservService {

  constructor(private http: HttpClient) { 
    console.log('serv listo');
  }

  getEmployees(){
    return this.http.get('https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/mauricio_zarate');
  }
  postEmployee(name: string, last_name: string, selectedDate: Date){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post('https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/mauricio_zarate', headers);
  }

  getGroups(){
    return this.http.get('https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/groups/mauricio');
  }

  getGroupsbyId(id:number){
    return this.http.get(`https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/mauricio_zarate/getByGroup?id=${id}`);
  }
}
