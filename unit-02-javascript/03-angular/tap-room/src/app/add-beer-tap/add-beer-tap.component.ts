import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-add-beer-tap',
  templateUrl: './add-beer-tap.component.html',
  styleUrls: ['./add-beer-tap.component.css']
})
export class AddBeerTapComponent {
  @Input() startNewTap: boolean;
  @Output() openNewTap = new EventEmitter();
  @Output() cancelNewTap = new EventEmitter();

  createTap(beerName: string, breweryName: string, beerType: string, abv: number, price: number) {
    let newTap: Keg = new Keg(beerName, breweryName, beerType, abv, price);
    this.openNewTap.emit(newTap);
  }

  clickCancelTap() {
    this.cancelNewTap.emit();
  }
}
