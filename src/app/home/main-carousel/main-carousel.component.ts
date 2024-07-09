import { Component } from '@angular/core';
import { homeCarouselData } from '../../../Data/mainCarousel';

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrl: './main-carousel.component.scss'
})
export class MainCarouselComponent {

  carouselData:any;

  ngOnInit()
  {
     this.carouselData=homeCarouselData;
     console.log(this.carouselData);
  }

}
