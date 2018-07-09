import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header.service';
import { Router,  NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { Http } from '@angular/http';



@Component({
  selector: 'app-head',
  templateUrl: './head.component.html'  
})



export class HeadComponent implements OnInit {
  
  
  tContent;
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
  constructor(private _hd : HeaderService, private _router:Router, private _http: Http ) {
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
  
  getTranslatePack() {            
    
    return  this._hd.getTranslatePack(this.langDefault).subscribe(data => {
      this.tContent = data.json();                        
    });    
  }
  setLang(event){    
    localStorage.setItem("langDefault", event); 
    this.getTranslatePack();
  }
  
  

  ngOnInit() {
    //this._hd.set(this.title);
    this.langDefault=localStorage.getItem("langDefault") || "EN";
    this.getTranslatePack();
    
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}
