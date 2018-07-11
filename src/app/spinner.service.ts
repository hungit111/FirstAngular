import { Injectable } from '@angular/core';
import { SpinnerComponent } from './spinner/spinner.component';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor() { }
  private spinnerCache = new Set<SpinnerComponent>();
  _register(spinner: SpinnerComponent): void {
    this.spinnerCache.add(spinner);
  }
  show(spinnerName: string): void {
    this.spinnerCache.forEach(spinner => {
      if (spinner.name === spinnerName) {
        spinner.show = true;
      }
    });
  }

  hide(spinnerName: string): void {
    this.spinnerCache.forEach(spinner => {
      if (spinner.name === spinnerName) {
        spinner.show = false;
      }
    });
  }
}
