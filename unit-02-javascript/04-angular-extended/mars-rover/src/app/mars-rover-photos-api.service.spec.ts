import { TestBed, inject } from '@angular/core/testing';

import { MarsRoverPhotosApiService } from './mars-rover-photos-api.service';

describe('MarsRoverPhotosApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarsRoverPhotosApiService]
    });
  });

  it('should be created', inject([MarsRoverPhotosApiService], (service: MarsRoverPhotosApiService) => {
    expect(service).toBeTruthy();
  }));
});
