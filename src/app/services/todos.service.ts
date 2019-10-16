import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

    private baseURL="https://jsonplaceholder.typicode.com/todos";


  constructor(private http:HttpClient) {
     console.log("Todo Service created....")
   }


getAllTodos():Observable<any>{
 return this.http.get(this.baseURL)
}

getTodosId(todosId:number):Observable<any>{
  return this.http.get(this.baseURL+"/"+todosId);
 }

 
 getTodosByUserId(userId:number):Observable<any>{
  console.log(this.baseURL+"?userId="+userId);
  return this.http.get(this.baseURL+"?userId="+userId);
  
 }
}
