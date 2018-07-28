import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap02Subchap02Component } from './chap02-subchap02.component';

describe('Chap02Subchap02Component', () => {
  let component: Chap02Subchap02Component;
  let fixture: ComponentFixture<Chap02Subchap02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap02Subchap02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap02Subchap02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
