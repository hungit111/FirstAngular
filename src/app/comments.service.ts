import { Injectable } from '@angular/core';
import { Comment } from './comment';
import { map, catchError } from "rxjs/operators";
import { Observable } from '../../node_modules/rxjs';
import { Http } from '../../node_modules/@angular/http';
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http : Http,
    private spinnerService: SpinnerService
  ) { }
  getListCommentByPostId(postId :string) : Observable<Comment[]>{
  let returnVal;  
  returnVal = this.http.get("http://127.0.1.1:8080/comment/"+postId).
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
  add(obj : Comment) : Observable<boolean>{        
    this.spinnerService.show('mySpinner');     
     
    this.http.post('http://127.0.1.1:8080/comment/add',obj,'').pipe(map(
      (data) => {        
        console.log("Success"); 
        this.spinnerService.hide('mySpinner');  
        return true;
    },(error)=> {
      console.log("fail"); 
      return false;
    }));      
    return
  }
}
