import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap05Subchap03Component } from './chap05-subchap03.component';

describe('Chap05Subchap03Component', () => {
  let component: Chap05Subchap03Component;
  let fixture: ComponentFixture<Chap05Subchap03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap05Subchap03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap05Subchap03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
