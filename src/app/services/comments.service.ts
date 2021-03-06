import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'  //angular 5
})
export class CommentsService {


  private baseURL="https://jsonplaceholder.typicode.com/comments";


  constructor(private http:HttpClient) {
     console.log("CommentsService created....")
   }


getAllComments():Observable<any>{
 return this.http.get(this.baseURL)
}

getCommentById(commentId:number):Observable<any>{
  return this.http.get(this.baseURL+"/"+commentId);
 }

 
 getAllCommentsByPostId(postId:number):Observable<any>{
  return this.http.get(this.baseURL+"?postId="+postId);
 }
 

}
