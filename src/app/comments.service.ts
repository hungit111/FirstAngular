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
  returnVal = this.http.get("http://localhost:8080/comment/"+postId).
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
  add(obj : Comment) : boolean{    
    var rtVal= false;
    this.spinnerService.show('mySpinner');  
    this.http.post('http://localhost:8080/comment/add',obj,'').subscribe(
      (data) => {        
        console.log("Success"); 
        this.spinnerService.hide('mySpinner');  
        rtVal= true;
    },(error)=> {
      rtVal= false;
    });      
    return rtVal;
  }
}
