import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Review4Subchap03Component } from './review4-subchap03.component';

describe('Review4Subchap03Component', () => {
  let component: Review4Subchap03Component;
  let fixture: ComponentFixture<Review4Subchap03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Review4Subchap03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Review4Subchap03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
