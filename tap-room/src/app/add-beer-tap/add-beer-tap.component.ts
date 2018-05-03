import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-add-beer-tap',
  templateUrl: './add-beer-tap.component.html',
  styleUrls: ['./add-beer-tap.component.css']
})
export class AddBeerTapComponent {
  @Output() openNewTap = new EventEmitter();

  createTap(beerName: string, breweryName: string, beerType: string, abv: number, price: number) {
    let newTap: Keg = new Keg(beerName, breweryName, beerType, abv, price);
    this.openNewTap.emit(newTap);
  }
}
