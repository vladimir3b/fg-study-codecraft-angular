import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap15Subchap04Component } from './chap15-subchap04.component';

describe('Chap15Subchap04Component', () => {
  let component: Chap15Subchap04Component;
  let fixture: ComponentFixture<Chap15Subchap04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap15Subchap04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap15Subchap04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
