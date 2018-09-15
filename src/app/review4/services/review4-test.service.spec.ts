import { TestBed, inject } from '@angular/core/testing';

import { Review4TestService } from './review4-test.service';

describe('Review4TestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Review4TestService]
    });
  });

  it('should be created', inject([Review4TestService], (service: Review4TestService) => {
    expect(service).toBeTruthy();
  }));
});
