import { Component, ViewEncapsulation } from '@angular/core';
import { SliderService } from 'src/app/services/slider.service';
import SwiperCore, { Pagination, Autoplay } from "swiper";
SwiperCore.use([Pagination, Autoplay]);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class SliderComponent {

  constructor(private sliderService: SliderService) {
  }

}
