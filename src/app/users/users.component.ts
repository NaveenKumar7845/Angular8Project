import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[UsersService]
})
export class UsersComponent implements OnInit {

 
  title='Users List';

  user:any;
  
  message="";

  userId=0;



constructor(private us:UsersService,private route:ActivatedRoute) { 
  console.log("################### UsersComponent created ############")
    }
  
    ngOnInit() {

      this.userId=this.route.snapshot.params.userId;
      console.log("################### UsersComponent initialized ############"+this.userId);
      
      if(this.userId)
      this.getUserById();

      
    }
  
    ngOnDestroy() {
      console.log("################### UsersListComponent destroyed ############")
    }


getUserById(){

  this.us.getUserById(this.userId)
         .subscribe(response=>this.user=response,error=>this.message=error);


}


}
