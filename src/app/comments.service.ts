import { Injectable } from '@angular/core';
import { Comment } from './comment';
import { map, catchError } from "rxjs/operators";
import { Observable } from '../../node_modules/rxjs';
import { Http } from '../../node_modules/@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private _http : Http) { }
  getListCommentByPostId(postId :string) : Observable<Comment[]>{
  let returnVal;  
  returnVal = this._http.get("http://localhost:8888/comment/"+postId).
    pipe(map((res: Response)=>{                
        
        return res.json();
        }),
        catchError(e => {            
        console.log(e);
        return "" ;
      })
    );
    
    
    return returnVal;
  }
}
