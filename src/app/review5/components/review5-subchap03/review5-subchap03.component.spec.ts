import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Review5Subchap03Component } from './review5-subchap03.component';

describe('Review5Subchap03Component', () => {
  let component: Review5Subchap03Component;
  let fixture: ComponentFixture<Review5Subchap03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Review5Subchap03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Review5Subchap03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
