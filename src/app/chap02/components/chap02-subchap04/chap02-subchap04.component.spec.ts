import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap02Subchap04Component } from './chap02-subchap04.component';

describe('Chap02Subchap04Component', () => {
  let component: Chap02Subchap04Component;
  let fixture: ComponentFixture<Chap02Subchap04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap02Subchap04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap02Subchap04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
