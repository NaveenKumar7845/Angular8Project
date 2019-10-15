import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//where to inject
 // template:'Helklo World!!!', 
  templateUrl: './app.component.html',//where to display
  styleUrls: ['./app.component.css'] //how to display
})
export class AppComponent {
  title = 'Atos Syntel';  //what to display
}
