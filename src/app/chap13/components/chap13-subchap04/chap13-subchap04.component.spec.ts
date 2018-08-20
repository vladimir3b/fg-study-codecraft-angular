import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap13Subchap04Component } from './chap13-subchap04.component';

describe('Chap13Subchap04Component', () => {
  let component: Chap13Subchap04Component;
  let fixture: ComponentFixture<Chap13Subchap04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap13Subchap04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap13Subchap04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
