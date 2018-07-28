import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Review3Subchap02Component } from './review3-subchap02.component';

describe('Review3Subchap02Component', () => {
  let component: Review3Subchap02Component;
  let fixture: ComponentFixture<Review3Subchap02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Review3Subchap02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Review3Subchap02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
