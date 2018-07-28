import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap09Subchap02Component } from './chap09-subchap02.component';

describe('Chap09Subchap02Component', () => {
  let component: Chap09Subchap02Component;
  let fixture: ComponentFixture<Chap09Subchap02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap09Subchap02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap09Subchap02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
