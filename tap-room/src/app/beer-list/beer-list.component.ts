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

  clickEditTap(tap: Keg) {
    this.selectEditTap.emit(tap);
  }

  clickSellPint(tap: Keg) {
    this.sendPintSale.emit(tap);
  }
}
