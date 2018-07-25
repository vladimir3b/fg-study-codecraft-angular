import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap05Subchap04Component } from './chap05-subchap04.component';

describe('Chap05Subchap04Component', () => {
  let component: Chap05Subchap04Component;
  let fixture: ComponentFixture<Chap05Subchap04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap05Subchap04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap05Subchap04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
