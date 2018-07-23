import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap05Subchap02Component } from './chap05-subchap02.component';

describe('Chap05Subchap02Component', () => {
  let component: Chap05Subchap02Component;
  let fixture: ComponentFixture<Chap05Subchap02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap05Subchap02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap05Subchap02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
