import { Injectable } from '@angular/core';
import { Http, Response  } from "@angular/http";

import { map, catchError } from "rxjs/operators";
import { Observable } from 'rxjs';
import { Post } from './post';
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor( private http : Http,
    private spinnerService: SpinnerService

  ) { }
  getAll(): Observable<Post[]> {   
    this.spinnerService.show('mySpinner');    
    let rtData = this.http.get("//10.0.2.15:8888/").
    pipe(map((res: Response) => {
      this.spinnerService.hide('mySpinner');                                           
      
      
      return res.json();      
    }),
    catchError(e => {
      console.log(e);
      return "" ;
    })
    );        
    
    
    return rtData;   
  }
}
