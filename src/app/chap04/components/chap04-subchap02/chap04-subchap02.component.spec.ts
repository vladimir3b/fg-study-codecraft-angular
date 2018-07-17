import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap04Subchap02Component } from './chap04-subchap02.component';

describe('Chap04Subchap02Component', () => {
  let component: Chap04Subchap02Component;
  let fixture: ComponentFixture<Chap04Subchap02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap04Subchap02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap04Subchap02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
