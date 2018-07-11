import { Component, OnInit ,Input  } from '@angular/core';
import { SpinnerService } from '../spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html'  
})
export class SpinnerComponent implements OnInit {

  constructor(
    private spinnerService: SpinnerService
  ) { }
  @Input() loadingImage: string;
  @Input() show = false;
  @Input() name:string;

  ngOnInit() {    
    this.spinnerService._register(this);
  }

}
