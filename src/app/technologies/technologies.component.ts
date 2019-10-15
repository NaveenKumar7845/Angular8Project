import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {

 title="Top 5 technologies";

 technologies=[
  {id:101,name:'AWS',likes:0,dislikes:0},
  {id:102,name:'Angular',likes:0,dislikes:0},
  {id:103,name:'Machine Learning',likes:0,dislikes:0},
  {id:104,name:'Micro Services',likes:0,dislikes:0},
  {id:105,name:'Data Science',likes:0,dislikes:0},
 ];


  incrementLikes(t){
    t.likes++;
  }

  incrementDislikes(t){
    t.dislikes++;
  }
  




  constructor() { 
    console.log("################### TechnologiesComponent created ############")
      }
    
      ngOnInit() {
        console.log("################### TechnologiesComponent initialized ############")
      }
    
      ngOnDestroy() {
        console.log("################### TechnologiesComponent destroyed ############")
      }
    

}
