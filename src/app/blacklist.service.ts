import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map, catchError } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class BlacklistService {

  constructor(private _http : Http) { }
  getAll() {
    let data = this._http.get("http://localhost:8080/black-list").
    pipe(map((res: Response) => {
      return res.json();
    }))
    return data;
  }
}
