import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Review3Subchap01Component } from './review3-subchap01.component';

describe('Review3Subchap01Component', () => {
  let component: Review3Subchap01Component;
  let fixture: ComponentFixture<Review3Subchap01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Review3Subchap01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Review3Subchap01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
