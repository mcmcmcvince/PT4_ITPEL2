import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({providedIn: 'root'})

export class ApiService {
  headers: HttpHeaders

   constructor(public http: HttpClient) {
    this.headers = new HttpHeaders(); 
    this.headers.append('Accept', 'application/json');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
   }

   addStudent (data: { student_number: any; student_name: any; course: any; year: any; email: any; contact_number: any; home_add: any; }){
    return this.http.post('http://localhost/ionic_crud_app/backend/create.php',data);
   }

   getStudents(){
    return this.http.get('http://localhost/ionic_crud_app/backend/getstudents.php');
   }

   getStudent(id: string){
    return this.http.get('http://localhost/ionic_crud_app/backend/getstudent.php?id='+id)
   }
   
   updateStudent(id: string,data: { student_number: any; student_name: any; course: any; year: any; email: any; contact_number: any; home_add: any; }){
    return this.http.put('http://localhost/ionic_crud_app/backend/updatestudent.php?id='+id,data);
   }

   deleteStudent(id: string){
    return this.http.delete('http://localhost/ionic_crud_app/backend/delete.php?id='+id);
   }


}
