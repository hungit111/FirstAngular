import { Injectable } from '@angular/core';
import { Http, Response  } from "@angular/http";

import { map, catchError } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogerService {

  constructor( private _http : Http) { }
  getAll() : Observable<any> {
    let rtData = this._http.get("http://127.0.0.1:8888/bloger").
    pipe(map((res :Response ) => {                          
            
      return res.json() ;            
    }),
    catchError(e => {
      console.log(e);
      return "" ;
    })
    );    
        
    return rtData;   
  }
}
