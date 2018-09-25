import { TestBed, inject } from '@angular/core/testing';

import { YouTubeApiService } from './youtube-api.service';

describe('YoutubeApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YouTubeApiService]
    });
  });

  it('should be created', inject([YouTubeApiService], (service: YouTubeApiService) => {
    expect(service).toBeTruthy();
  }));
});
