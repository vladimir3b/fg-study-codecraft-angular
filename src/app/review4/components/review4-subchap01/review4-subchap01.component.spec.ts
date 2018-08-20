import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Review4Subchap01Component } from './review4-subchap01.component';

describe('Review4Subchap01Component', () => {
  let component: Review4Subchap01Component;
  let fixture: ComponentFixture<Review4Subchap01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Review4Subchap01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Review4Subchap01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
