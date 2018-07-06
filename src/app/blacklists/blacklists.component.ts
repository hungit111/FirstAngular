import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { HeaderService } from '../header.service';
import { jsonpFactory } from '@angular/http/src/http_module';
import { BlackList } from '../blacklist';
import { Subject } from 'rxjs';
import { Http ,Response} from '@angular/http';
import { map, catchError } from "rxjs/operators";
import { BlacklistService } from '../blacklist.service';

@Component({
  selector: 'app-blacklists',
  templateUrl: './blacklists.component.html' 
})
export class BlacklistsComponent implements OnInit, OnDestroy {
  title = 'Black List';
  dtOptions: DataTables.Settings = {};
  blackLists ;
  dtTrigger: Subject<any> = new Subject();
  constructor( private _hd : HeaderService, private http: Http, private _blackListService : BlacklistService) { 
    
  }

  ngOnInit() {
    this._hd.set(this.title);    
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.getAll();

    
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  
  getAll(){
    return this._blackListService.getAll().subscribe(d => {
      this.blackLists=d;
      this.dtTrigger.next();
    })
  }
}
