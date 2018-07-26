import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap06Subchap02Component } from './chap06-subchap02.component';

describe('Chap06Subchap02Component', () => {
  let component: Chap06Subchap02Component;
  let fixture: ComponentFixture<Chap06Subchap02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap06Subchap02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap06Subchap02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
