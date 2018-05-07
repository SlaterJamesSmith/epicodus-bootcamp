import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})

export class BrowseComponent implements OnInit {
  maxCarouselPositions: number;

  ngOnInit() {
    this.calcCarouselLimit();
  }

  calcCarouselLimit() {
    let carouselWidth: number = document.getElementById("carousel-all").clientWidth;
    if (carouselWidth < 638) {
      this.maxCarouselPositions = 4;
    } else if (carouselWidth < 852) {
      this.maxCarouselPositions = 3;
    } else if (carouselWidth < 1046) {
      this.maxCarouselPositions = 2;
    } else {
      this.maxCarouselPositions = 1;
    }
  }
}
