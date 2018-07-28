import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Review3Subchap04Component } from './review3-subchap04.component';

describe('Review3Subchap04Component', () => {
  let component: Review3Subchap04Component;
  let fixture: ComponentFixture<Review3Subchap04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Review3Subchap04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Review3Subchap04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
