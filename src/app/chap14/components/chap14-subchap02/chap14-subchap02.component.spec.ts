import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap14Subchap02Component } from './chap14-subchap02.component';

describe('Chap14Subchap02Component', () => {
  let component: Chap14Subchap02Component;
  let fixture: ComponentFixture<Chap14Subchap02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap14Subchap02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap14Subchap02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
