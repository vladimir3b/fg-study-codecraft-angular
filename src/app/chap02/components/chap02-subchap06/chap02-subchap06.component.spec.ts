import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap02Subchap06Component } from './chap02-subchap06.component';

describe('Chap02Subchap06Component', () => {
  let component: Chap02Subchap06Component;
  let fixture: ComponentFixture<Chap02Subchap06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap02Subchap06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap02Subchap06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
