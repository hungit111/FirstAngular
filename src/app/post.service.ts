import { Injectable } from '@angular/core';
import { Http, Response  } from "@angular/http";

import { map, catchError } from "rxjs/operators";
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor( private _http : Http) { }
  getAll(): Observable<Post[]> {        
    let rtData = this._http.get("//127.0.0.1:8888/").
    pipe(map((res: Response) => {                                           
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
