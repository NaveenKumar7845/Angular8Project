import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Angular8BasicsComponent } from './angular8-basics/angular8-basics.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { HomeComponent } from './home/home.component';
import { Angular8PipesComponent } from './angular8-pipes/angular8-pipes.component';
import { CaseStudyComponent } from './case-study/case-study.component';
import { PhotosComponent } from './photos/photos.component';
import { CommentsComponent } from './comments/comments.component';
import { AlbumsComponent } from './albums/albums.component';
import { TodosComponent } from './todos/todos.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersTableComponent } from './users-table/users-table.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'basics',component:Angular8BasicsComponent},
  {path:'pipes',component:Angular8PipesComponent},
  {path:'technologies',component:TechnologiesComponent},
  {path:'casestudy',component:CaseStudyComponent,
   children:[
    {path:'users',component:UsersComponent,
     children:[
      {path:'list',component:UsersListComponent},
      {path:'table',component:UsersTableComponent},
       
     ]
  
  
    },

    {path:'users/:userId',component:UsersComponent},
    {path:'posts',component:PostsComponent},
    {path:'todos',component:TodosComponent},
    {path:'albums',component:AlbumsComponent},
    {path:'comments',component:CommentsComponent},
    {path:'photos',component:PhotosComponent}
   ]

},



  {path:'**',redirectTo:"home"},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
