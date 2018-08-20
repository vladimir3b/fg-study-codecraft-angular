import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap12Subchap02Component } from './chap12-subchap02.component';

describe('Chap12Subchap02Component', () => {
  let component: Chap12Subchap02Component;
  let fixture: ComponentFixture<Chap12Subchap02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap12Subchap02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap12Subchap02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
