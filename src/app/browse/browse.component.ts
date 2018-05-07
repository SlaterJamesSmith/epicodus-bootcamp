import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})

export class BrowseComponent implements OnInit {
  carouselWidth: number;
  maxCarouselPositions: number;

  ngOnInit() {
    this.calcCarouselLimits();
  }

  calcCarouselLimits() {
    let availableWidth = document.getElementById("carousel-all").clientWidth;
    if (availableWidth < 638) {
      this.carouselWidth = 424;
      this.maxCarouselPositions = 4;
    } else if (availableWidth < 852) {
      this.carouselWidth = 638;
      this.maxCarouselPositions = 3;
    } else if (availableWidth < 1046) {
      this.carouselWidth = 852;
      this.maxCarouselPositions = 2;
    } else {
      this.carouselWidth = 1046;
      this.maxCarouselPositions = 1;
    }
  }
}
