import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap11Subchap04Component } from './chap11-subchap04.component';

describe('Chap11Subchap04Component', () => {
  let component: Chap11Subchap04Component;
  let fixture: ComponentFixture<Chap11Subchap04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap11Subchap04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap11Subchap04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
