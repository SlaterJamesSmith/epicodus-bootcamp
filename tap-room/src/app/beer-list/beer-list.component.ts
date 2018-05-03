import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model'

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent {
  @Input() beerListKegTaps: Keg[] = [];
  @Output() selectEditTap = new EventEmitter();
  @Output() sendPintSale = new EventEmitter();

  volumeStatusColor(tap: Keg) {
    if (tap.pintCount < 40 && tap.pintCount >= 20) {
      return 'bg-warning pint-count';
    } else if (tap.pintCount < 20) {
      return 'bg-danger text-white pint-count';
    } else {
      return 'pint-count';
    }
  }

  clickEditTap(tap: Keg) {
    this.selectEditTap.emit(tap);
  }

  clickSellPint(tap: Keg) {
    this.sendPintSale.emit(tap);
  }
}
