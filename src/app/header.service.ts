import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {  
  private title = new Subject<string>();
  globalLang="EN";
  set( title : string) {
      this.title.next(title);
  }
  get(): Observable<string>{
    return this.title.asObservable();
  }
}
