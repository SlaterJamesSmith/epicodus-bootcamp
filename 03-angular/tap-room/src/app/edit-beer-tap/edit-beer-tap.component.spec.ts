import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBeerTapComponent } from './add-beer-tap.component';

describe('AddBeerTapComponent', () => {
  let component: AddBeerTapComponent;
  let fixture: ComponentFixture<AddBeerTapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBeerTapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBeerTapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
