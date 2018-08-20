import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Review4Subchap02Component } from './review4-subchap02.component';

describe('Review4Subchap02Component', () => {
  let component: Review4Subchap02Component;
  let fixture: ComponentFixture<Review4Subchap02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Review4Subchap02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Review4Subchap02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
