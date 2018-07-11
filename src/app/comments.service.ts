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
  console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxx");
  returnVal = this._http.get("http://localhost:8888/comment/3").
    pipe(map((res: Response)=>{
        console.log(res);
        
        return res.json();
        }),
        catchError(e => {
            console.log("=======================");
        console.log(e);
        return "" ;
      })
    );
    console.log(returnVal);
    
    return returnVal;
  }
}
