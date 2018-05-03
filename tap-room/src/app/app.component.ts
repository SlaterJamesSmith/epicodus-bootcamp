import { Component } from '@angular/core';
import { Keg } from './models/keg.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  masterKegTap: Keg[] = [
    new Keg('All Day IPA', 'Founders', 'India Pale Ale', 4.7, 4),
    new Keg('Breakfast Stout', 'Founders', 'Oatmeal Stout', 8.3, 5),
    new Keg('Dirty Bastard', 'Founders', 'Scotch Style Ale', 8.5, 4),
    new Keg('Imperial Stout', 'Founders', 'Imperial Stout', 10.5, 5),
    new Keg('Porter', 'Founders', 'Porter', 6.5, 4),
    new Keg('Solid Gold', 'Founders', 'Lager', 4.4, 4),
  ];
}
