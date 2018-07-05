import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { BlogerComponent } from './bloger/bloger.component';
import { HeaderService } from './header.service';
import { BlacklistsComponent } from './blacklists/blacklists.component';

const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'posts', component: PostsComponent },
  { path: 'bloger', component: BlogerComponent },
  { path: 'black-list', component: BlacklistsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [HeaderService]
})



export class AppRoutingModule { }
