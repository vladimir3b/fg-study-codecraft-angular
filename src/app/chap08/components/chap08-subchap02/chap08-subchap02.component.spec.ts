import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap08Subchap02Component } from './chap08-subchap02.component';

describe('Chap08Subchap02Component', () => {
  let component: Chap08Subchap02Component;
  let fixture: ComponentFixture<Chap08Subchap02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap08Subchap02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap08Subchap02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
