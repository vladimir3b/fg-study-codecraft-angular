import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Review5Subchap01Component } from './review5-subchap01.component';

describe('Review5Subchap01Component', () => {
  let component: Review5Subchap01Component;
  let fixture: ComponentFixture<Review5Subchap01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Review5Subchap01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Review5Subchap01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
