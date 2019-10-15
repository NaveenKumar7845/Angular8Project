import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() { 
    console.log("################### HomeComponent created ############")
      }
    
      ngOnInit() {
        console.log("################### HomeComponent initialized ############")
      }
    
      ngOnDestroy() {
        console.log("################### HomeComponent destroyed ############")
      }
    

}
