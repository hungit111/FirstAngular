import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map, catchError } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class BlacklistService {

  constructor(private _http : Http) { }
  getAll() {
    let data = this._http.get("http://127.0.1.1:8888/black-list").
    pipe(map((res: Response) => {
      return res.json();
    }))
    return data;
  }
}
