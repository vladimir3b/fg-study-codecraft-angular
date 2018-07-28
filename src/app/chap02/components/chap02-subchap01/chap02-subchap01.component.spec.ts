import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap02Subchap01Component } from './chap02-subchap01.component';

describe('Chap02Subchap01Component', () => {
  let component: Chap02Subchap01Component;
  let fixture: ComponentFixture<Chap02Subchap01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap02Subchap01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap02Subchap01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
