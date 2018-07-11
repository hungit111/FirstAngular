import { Component, OnInit, Input } from '@angular/core';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html'
})

export class CommentsComponent implements OnInit {
  @Input() postId : string;  
  constructor(private _comment: CommentsService ) {
    
  }
  listComment;
  
  
  
  getCommentsByPostId(postId) {
    return this._comment.getListCommentByPostId(postId);
  }  
  ngOnInit() {    
    this.getCommentsByPostId(this.postId).subscribe( d => this.listComment= d);    
    
  }

}
