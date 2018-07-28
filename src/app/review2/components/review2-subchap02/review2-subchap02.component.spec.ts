import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Review2Subchap02Component } from './review2-subchap02.component';

describe('Review2Subchap02Component', () => {
  let component: Review2Subchap02Component;
  let fixture: ComponentFixture<Review2Subchap02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Review2Subchap02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Review2Subchap02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
