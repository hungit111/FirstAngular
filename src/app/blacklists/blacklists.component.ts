import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';

import { BlacklistService } from '../blacklist.service';

@Component({
  selector: 'app-blacklists',
  templateUrl: './blacklists.component.html' 
})
export class BlacklistsComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  blackLists ;
  dtTrigger: Subject<any> = new Subject();
  constructor( private _blackListService : BlacklistService) { 
    
  }

  ngOnInit() {    
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
