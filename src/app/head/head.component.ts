import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header.service';
import { Router,  NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-head',
  templateUrl: './head.component.html'  
})
export class HeadComponent implements OnInit {
  
  langDefault : string;
  langList=[{
    value:"EN",
    text:"English"
  },
  {
    value:"VI",
    text:"Vietnamese"
  }
  ];
  title="Blogs";
  subscription: Subscription;
  constructor(private _hd : HeaderService, private _router:Router ) {
    this._router.events
    .subscribe((event) => {
      if (event instanceof NavigationEnd) {
        switch (event.url) {
          case "/posts": this.title= "Posts"; break;                   
          case "/bloger": this.title= "Blogers"; break;        
          case "/black-list": this.title= "Black Lists"; break;        
            
          default: "Blogs";
            break;
        }
      }
    });
    
  }
  setLang(event){    
    localStorage.setItem("langDefault", event); 
  }
  
  

  ngOnInit() {
    //this._hd.set(this.title);
    this.langDefault=localStorage.getItem("langDefault") || "EN";
    
    
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}
