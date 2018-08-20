import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Review5Subchap05Component } from './review5-subchap05.component';

describe('Review5Subchap05Component', () => {
  let component: Review5Subchap05Component;
  let fixture: ComponentFixture<Review5Subchap05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Review5Subchap05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Review5Subchap05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
