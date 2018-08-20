import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap13Subchap03Component } from './chap13-subchap03.component';

describe('Chap13Subchap03Component', () => {
  let component: Chap13Subchap03Component;
  let fixture: ComponentFixture<Chap13Subchap03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap13Subchap03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap13Subchap03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
