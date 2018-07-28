import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Review3Subchap03Component } from './review3-subchap03.component';

describe('Review3Subchap03Component', () => {
  let component: Review3Subchap03Component;
  let fixture: ComponentFixture<Review3Subchap03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Review3Subchap03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Review3Subchap03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
