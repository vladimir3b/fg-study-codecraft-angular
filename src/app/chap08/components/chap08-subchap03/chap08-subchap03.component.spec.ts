import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap08Subchap03Component } from './chap08-subchap03.component';

describe('Chap08Subchap03Component', () => {
  let component: Chap08Subchap03Component;
  let fixture: ComponentFixture<Chap08Subchap03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap08Subchap03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap08Subchap03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
