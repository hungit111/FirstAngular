import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header.service';
import { BlogerService } from '../bloger.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bloger',
  templateUrl: './bloger.component.html'
})
export class BlogerComponent implements OnInit {
  title = 'Blogers';
  listBlogers;
  //initializing p to one
  p: number = 1;
  constructor( private _hd : HeaderService, private _blogerServie : BlogerService) { 
    
  }

  getAll(){    
        
    return this._blogerServie.getAll().subscribe( d => this.listBlogers =d)
  }
  trackByName (index, listBlogers){
    return listBlogers.FirstName_vch;
  }
  ngOnInit() {
    this._hd.set(this.title);
    this.getAll();   
    
  }

}
