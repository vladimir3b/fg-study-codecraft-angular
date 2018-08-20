import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap10Subchap04Component } from './chap10-subchap04.component';

describe('Chap10Subchap04Component', () => {
  let component: Chap10Subchap04Component;
  let fixture: ComponentFixture<Chap10Subchap04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap10Subchap04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap10Subchap04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
