import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PagerService } from '../services/pager.service';
import {TodosService} from '../services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  title='All Todos';

  todos:any;
  
  message="";

  userId=0;

   // pager object
   pager: any = {};

   // paged items
   pagedItems: any[];

  
constructor(private ts:TodosService,private route:ActivatedRoute,private pagerService:PagerService) { 
  console.log("################### TodosComponent created ############")
    }
  
    ngOnInit() {

      
      console.log("################### TodosComponent initialized ############");
      
      if(this.userId)
      this.getAllTodosByUserId();
      else
      this.getAllTodos();

      
    }
  
    ngOnDestroy() {
      console.log("################### TodosComponent destroyed ############")
    }


getAllTodos(){

  this.ts.getAllTodos()
         .subscribe(response=>{this.todos=response;
        this.setPage(1);
        },error=>this.message=error);


}
getAllTodosByUserId(){

  this.ts.getAllTodosByUserId(this.userId)
         .subscribe(response=>{this.todos=response;
        this.setPage(1);
        },error=>this.message=error);


}



setPage(page: number) {
  // get pager object from service
  this.pager = this.pagerService.getPager(this.todos.length, page);

  // get current page of items
  this.pagedItems = this.todos.slice(this.pager.startIndex, this.pager.endIndex + 1);
}


}
