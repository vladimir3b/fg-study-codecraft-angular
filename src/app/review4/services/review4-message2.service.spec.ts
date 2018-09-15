import { TestBed, inject } from '@angular/core/testing';

import { Review4Message2Service } from './review4-message2.service';

describe('Review4Message2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Review4Message2Service]
    });
  });

  it('should be created', inject([Review4Message2Service], (service: Review4Message2Service) => {
    expect(service).toBeTruthy();
  }));
});
