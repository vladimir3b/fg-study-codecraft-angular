import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap02Subchap08Component } from './chap02-subchap08.component';

describe('Chap02Subchap08Component', () => {
  let component: Chap02Subchap08Component;
  let fixture: ComponentFixture<Chap02Subchap08Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap02Subchap08Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap02Subchap08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
