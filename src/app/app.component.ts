import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  subscription: Subscription;
  title: string = "Posts";
  constructor( _hd : HeaderService){
    this.subscription= _hd.get().subscribe( t => {this.title=t})
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
