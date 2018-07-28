import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Review2Subchap03Component } from './review2-subchap03.component';

describe('Review2Subchap03Component', () => {
  let component: Review2Subchap03Component;
  let fixture: ComponentFixture<Review2Subchap03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Review2Subchap03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Review2Subchap03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
