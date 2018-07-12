import { Component, OnInit, Input } from '@angular/core';
import { CommentsService } from '../comments.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html'
})

export class CommentsComponent implements OnInit {
  @Input() postId : string;  
  constructor(private comment: CommentsService    
  ) {
    
  }
  listComment;
  
  ngOnInit() {    
    this.getCommentsByPostId(this.postId).subscribe( d => this.listComment= d);    
    
  }
  
  getCommentsByPostId(postId) {
    return this.comment.getListCommentByPostId(postId);
  }  


}
