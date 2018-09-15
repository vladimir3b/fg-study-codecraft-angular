import { TestBed, inject } from '@angular/core/testing';

import { Review4Message1Service } from './review4-message1.service';

describe('Review4Message1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Review4Message1Service]
    });
  });

  it('should be created', inject([Review4Message1Service], (service: Review4Message1Service) => {
    expect(service).toBeTruthy();
  }));
});
