import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header.service';
import { BlogerService } from '../bloger.service';

@Component({
  selector: 'app-bloger',
  templateUrl: './bloger.component.html'
})
export class BlogerComponent implements OnInit {

  constructor( private _hd : HeaderService, private _blogerServie : BlogerService) { }
  title = 'Blogers';
  listBlogers;
  //initializing p to one
  p: number = 1;
  getAll(){    
        
    return this._blogerServie.getAll().subscribe( d => this.listBlogers =d)
  }
  ngOnInit() {
    this._hd.set(this.title);
    this.getAll();    
    
  }

}
