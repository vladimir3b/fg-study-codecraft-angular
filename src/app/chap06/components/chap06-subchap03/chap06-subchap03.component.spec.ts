import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap06Subchap03Component } from './chap06-subchap03.component';

describe('Chap06Subchap03Component', () => {
  let component: Chap06Subchap03Component;
  let fixture: ComponentFixture<Chap06Subchap03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap06Subchap03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap06Subchap03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
