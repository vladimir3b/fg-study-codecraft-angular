import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Review4Subchap04Component } from './review4-subchap04.component';

describe('Review4Subchap04Component', () => {
  let component: Review4Subchap04Component;
  let fixture: ComponentFixture<Review4Subchap04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Review4Subchap04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Review4Subchap04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
