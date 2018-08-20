import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap15Subchap02Component } from './chap15-subchap02.component';

describe('Chap15Subchap02Component', () => {
  let component: Chap15Subchap02Component;
  let fixture: ComponentFixture<Chap15Subchap02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap15Subchap02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap15Subchap02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
