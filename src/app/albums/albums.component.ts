import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import {AlbumsService} from '../services/albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  albums : any;

  message : any;

  userId =0;

  displayedColumns: string[] = ['userId', 'id', 'title'];
  dataSource;

  constructor(private ts:AlbumsService,private route:ActivatedRoute) { 
  console.log("################### TodosComponent created ############")
    }

  ngOnInit() {
      this.userId = this.route.snapshot.queryParams.userId;
      
      console.log("################### TodosComponent initialized ############");
      
      if(this.userId)
      this.getAllAlbumsByUserId();
      else
      this.getAllAlbums();

      
    }
  
    ngOnDestroy() {
      console.log("################### TodosComponent destroyed ############")
    }

    getAllAlbums(){

          this.ts.getAllAlbums()
         .subscribe(response=>{this.albums=response;},error=>this.message=error);
this.dataSource= new MatTableDataSource<any>(this.albums);

}
getAllAlbumsByUserId(){

          this.ts.getAlbumsByUserId(this.userId)
         .subscribe(response=>{this.albums=response;},error=>this.message=error);
 this.dataSource= new MatTableDataSource<any>(this.albums);

}
}
