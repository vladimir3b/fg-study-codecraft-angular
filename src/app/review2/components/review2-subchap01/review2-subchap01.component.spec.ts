import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Review2Subchap01Component } from './review2-subchap01.component';

describe('Review2Subchap01Component', () => {
  let component: Review2Subchap01Component;
  let fixture: ComponentFixture<Review2Subchap01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Review2Subchap01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Review2Subchap01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
