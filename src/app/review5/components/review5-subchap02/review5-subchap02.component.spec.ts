import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Review5Subchap02Component } from './review5-subchap02.component';

describe('Review5Subchap02Component', () => {
  let component: Review5Subchap02Component;
  let fixture: ComponentFixture<Review5Subchap02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Review5Subchap02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Review5Subchap02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
