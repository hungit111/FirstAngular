import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html'  
})
export class PostsComponent implements OnInit {

    constructor(private _post: PostService) { }
    pageName="Blogs List";    
    listPost;
    getAll(){
      return this._post.getAll().subscribe( p => this.listPost=p);
    }
    ngOnInit() {
      this.getAll();
  }
}
