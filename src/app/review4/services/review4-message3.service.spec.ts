import { TestBed, inject } from '@angular/core/testing';

import { Review4Message3Service } from './review4-message3.service';

describe('Review4Message3Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Review4Message3Service]
    });
  });

  it('should be created', inject([Review4Message3Service], (service: Review4Message3Service) => {
    expect(service).toBeTruthy();
  }));
});
