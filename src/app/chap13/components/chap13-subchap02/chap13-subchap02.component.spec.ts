import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap13Subchap02Component } from './chap13-subchap02.component';

describe('Chap13Subchap02Component', () => {
  let component: Chap13Subchap02Component;
  let fixture: ComponentFixture<Chap13Subchap02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap13Subchap02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap13Subchap02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
