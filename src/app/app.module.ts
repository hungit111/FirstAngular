import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { AppRoutingModule } from './/app-routing.module';
import { BlogerComponent } from './bloger/bloger.component';
import { CommentsComponent } from './comments/comments.component';
import { HeaderService } from './header.service';
import {  HttpModule } from '@angular/http';
import { DataTablesModule } from 'angular-datatables';
import { BlacklistsComponent } from './blacklists/blacklists.component';
import {NgxPaginationModule} from 'ngx-pagination'; 



@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    BlogerComponent,    
    CommentsComponent, BlacklistsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    DataTablesModule,
    NgxPaginationModule
  ],
  providers: [HeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
