import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap02Subchap05Component } from './chap02-subchap05.component';

describe('Chap02Subchap05Component', () => {
  let component: Chap02Subchap05Component;
  let fixture: ComponentFixture<Chap02Subchap05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap02Subchap05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap02Subchap05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
