import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap02Subchap03Component } from './chap02-subchap03.component';

describe('Chap02Subchap03Component', () => {
  let component: Chap02Subchap03Component;
  let fixture: ComponentFixture<Chap02Subchap03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap02Subchap03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap02Subchap03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
