import { Component, OnInit } from '@angular/core';
import { BlogerService } from '../bloger.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-bloger',
  templateUrl: './bloger.component.html'
})
export class BlogerComponent implements OnInit {  
  listBlogers : Observable<any>;
  //initializing p to one
  p: number = 1;
  constructor(  private _blogerServie : BlogerService) { 
    
  }

  getAll(){    
        
    return this._blogerServie.getAll().subscribe( d => this.listBlogers =d)
  }
  trackByName (index, listBlogers){
    return listBlogers.FirstName_vch;
  }
  ngOnInit() {    
    //this.getAll();   
    this.listBlogers= this._blogerServie.getAll();
  }

}
