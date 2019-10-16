import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { PagerService } from '../services/pager.service';
import { StudentDetailsService } from './services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  title='All Posts';

  todos:any;
  constructor() { }

  ngOnInit() {
  }

}
