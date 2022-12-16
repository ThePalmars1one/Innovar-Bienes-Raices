import { Component } from '@angular/core';
import { SliderService } from 'src/app/services/slider.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.sass']
})
export class SliderComponent {

  constructor(private sliderService: SliderService) {
  }

}
