import { Component, OnInit } from '@angular/core';

import { CarouselSlides } from '../../utils/constants/carousel-slides.constants';
import { CarouselSlide } from '../../utils/interfaces/carousel-slide.interface';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {

  carouselSlides: CarouselSlide[] = CarouselSlides;

  constructor() { }

  ngOnInit(): void { }

}
