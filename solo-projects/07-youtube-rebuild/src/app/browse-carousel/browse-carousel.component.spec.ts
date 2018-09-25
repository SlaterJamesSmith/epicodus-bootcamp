import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseCarouselComponent } from './browse-carousel.component';

describe('BrowseCarouselComponent', () => {
  let component: BrowseCarouselComponent;
  let fixture: ComponentFixture<BrowseCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
