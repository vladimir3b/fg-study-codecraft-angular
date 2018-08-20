import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap11Subchap02Component } from './chap11-subchap02.component';

describe('Chap11Subchap02Component', () => {
  let component: Chap11Subchap02Component;
  let fixture: ComponentFixture<Chap11Subchap02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap11Subchap02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap11Subchap02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
