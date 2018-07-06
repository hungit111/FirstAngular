import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {  
  constructor( private _http : Http) { }
  private title = new Subject<string>();  
  
  set( title : string) {
      this.title.next(title);
  }
  get(): Observable<string>{
    return this.title.asObservable();
  }
  getTranslatePack(lang) {    
    return this._http.get("assets/head/"+lang.toLowerCase()+".json");    
  }
}
