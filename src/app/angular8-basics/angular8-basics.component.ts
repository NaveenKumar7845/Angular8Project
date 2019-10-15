import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-angular8-basics',
  templateUrl: './angular8-basics.component.html',
  styleUrls: ['./angular8-basics.component.css']
})
export class Angular8BasicsComponent implements OnInit,OnDestroy {

title='Angular 8 Basics'; //string

colors=['MAGENTA','RED','BROWN','PURPLE']; //array

day=1;  //number

min:number=1;
max:number=8;


time=new Observable<string>((s:Subscriber<string>)=>{

  setInterval(()=>{
    s.next(new Date().toLocaleString());
  },1000);

});




show=true;  //boolean
hide=false; //boolean

employee={
id:101,
name:'Pradeep chinchole',
salary:12999.555446623,
variable:0.05,
doj:new Date(),
pan:'amxpc9834D',
mobile:'9158652627',
isMarried:true
};


showHide(){
  this.hide=!this.hide;
}



constructor() { 
console.log("################### Angular8BasicsComponent created ############")
  }

  ngOnInit() {
    console.log("################### Angular8BasicsComponent initialized ############")
  }

  ngOnDestroy() {
    console.log("################### Angular8BasicsComponent destroyed ############")
  }

}
