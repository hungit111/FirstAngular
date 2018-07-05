import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { AppRoutingModule } from './/app-routing.module';
import { BlogerComponent } from './bloger/bloger.component';
import { CommentsComponent } from './comments/comments.component';
import { HeaderService } from './header.service';
import {  HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    BlogerComponent,    
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [HeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
