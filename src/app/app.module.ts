import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Angular8BasicsComponent } from './angular8-basics/angular8-basics.component';
import { Angular8PipesComponent } from './angular8-pipes/angular8-pipes.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { HomeComponent } from './home/home.component';
import { GenderPipe } from './pipes/gender.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { TodosComponent } from './todos/todos.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { CommentsComponent } from './comments/comments.component';
import { CaseStudyComponent } from './case-study/case-study.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { UsersService } from './services/users.service';

@NgModule({
  declarations: [//components directives pipes
    AppComponent, Angular8BasicsComponent, Angular8PipesComponent, TechnologiesComponent,
     HomeComponent, GenderPipe, OrderByPipe, UsersComponent, PostsComponent, TodosComponent, AlbumsComponent, PhotosComponent, CommentsComponent, CaseStudyComponent, UsersListComponent, UsersTableComponent
  ],
  imports: [  //modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule
  ],
  providers: [],//services  //prior to angular 5
// bootstrap: [AppComponent,Angular8BasicsComponent, Angular8PipesComponent, TechnologiesComponent] 
  bootstrap: [AppComponent] 


})
export class AppModule { }
