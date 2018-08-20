import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap10Subchap02Component } from './chap10-subchap02.component';

describe('Chap10Subchap02Component', () => {
  let component: Chap10Subchap02Component;
  let fixture: ComponentFixture<Chap10Subchap02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap10Subchap02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap10Subchap02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
