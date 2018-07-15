import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap02Subchap09Component } from './chap02-subchap09.component';

describe('Chap02Subchap09Component', () => {
  let component: Chap02Subchap09Component;
  let fixture: ComponentFixture<Chap02Subchap09Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap02Subchap09Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap02Subchap09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
