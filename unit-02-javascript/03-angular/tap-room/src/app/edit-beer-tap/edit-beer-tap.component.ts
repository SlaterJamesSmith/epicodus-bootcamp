import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model'

@Component({
  selector: 'app-edit-beer-tap',
  templateUrl: './edit-beer-tap.component.html',
  styleUrls: ['./edit-beer-tap.component.css']
})
export class EditBeerTapComponent {
  @Input() selectedTap: Keg;
  @Output() closeEdit = new EventEmitter();

  clickCloseEdit() {
    this.closeEdit.emit()
  }
}
