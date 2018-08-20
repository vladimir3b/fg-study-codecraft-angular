import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap11Subchap03Component } from './chap11-subchap03.component';

describe('Chap11Subchap03Component', () => {
  let component: Chap11Subchap03Component;
  let fixture: ComponentFixture<Chap11Subchap03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap11Subchap03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap11Subchap03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
