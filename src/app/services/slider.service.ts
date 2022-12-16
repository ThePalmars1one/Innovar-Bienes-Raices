import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  constructor() { }

  public loadScript() {
    let carousel = document.createElement('script');
    carousel.src = 'assets/js/slider.js';
    carousel.type = 'text/javascript';
    carousel.async = true;
    document.getElementsByTagName('head')[0].appendChild(carousel);
  }
}
