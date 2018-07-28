import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Review1Subchap01Component } from './review1-subchap01.component';

describe('Review1Subchap01Component', () => {
  let component: Review1Subchap01Component;
  let fixture: ComponentFixture<Review1Subchap01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Review1Subchap01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Review1Subchap01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
