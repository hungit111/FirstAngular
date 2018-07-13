import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { Comment } from '../comment';
import { PostService } from '../post.service';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html'  
})
export class PostsComponent implements OnInit {

    constructor(
        private postService: PostService, 
        private commentService: CommentsService        
      ) { }
    pageName="Blogs List";    
    listPost : Post[];
    
    ngOnInit() {
     
      this.getAll(); 
       
    }
    getAll(){
      return this.postService.getAll().subscribe( p => this.listPost=p);      
      
    }
    AddComments(content,postId){      
      
      var obj : Comment = {
        name:"Hung",
        title: "Hung comment",
        content: content,
        postId:postId
      };
      
      this.commentService.add(obj).subscribe(d => {
        console.log("==========================");
        console.log(d);
        if(d.length){
          this.getAll();
        }
        else
        {
          alert("error!")
        }
      }) ;
      
      
     
      
    }
}
