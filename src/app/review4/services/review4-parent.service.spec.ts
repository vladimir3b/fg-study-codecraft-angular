import { TestBed, inject } from '@angular/core/testing';

import { Review4ParentService } from './review4-parent.service';

describe('Review4ParentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Review4ParentService]
    });
  });

  it('should be created', inject([Review4ParentService], (service: Review4ParentService) => {
    expect(service).toBeTruthy();
  }));
});
