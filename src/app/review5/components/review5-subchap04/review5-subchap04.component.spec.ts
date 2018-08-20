import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Review5Subchap04Component } from './review5-subchap04.component';

describe('Review5Subchap04Component', () => {
  let component: Review5Subchap04Component;
  let fixture: ComponentFixture<Review5Subchap04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Review5Subchap04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Review5Subchap04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
