import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CarouselComponent as MDBCarouselComponent } from 'angular-bootstrap-md';
import { CarouselSlide } from '../../utils/interfaces/carousel-slide.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() slides: CarouselSlide[];
  @ViewChild('carousel') carousel: MDBCarouselComponent;
  currentSlide: number;

  constructor() { }

  ngOnInit(): void {
    this.currentSlide = 0;
  }

  onActiveSlideChange(event: any): void {
    this.currentSlide = event.relatedTarget;
  }

  /**
   * onPreviousClick()
   * Navigates to Carousel's previous slide
   */
  onPreviousClick(): void {
    this.carousel.previousSlide();
  }

  /**
   * onNextClick()
   * Navigates to Carousel's next slide
   */
  onNextClick(): void {
    this.carousel.nextSlide(true);
  }

  /**
   * onDotClick()
   * Navigates to the specified slide
   */
  onDotClick(index: number): void {
    this.carousel.selectSlide(index);
  }
}
