import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Review4Subchap05Component } from './review4-subchap05.component';

describe('Review4Subchap05Component', () => {
  let component: Review4Subchap05Component;
  let fixture: ComponentFixture<Review4Subchap05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Review4Subchap05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Review4Subchap05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
