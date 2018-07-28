import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap09Subchap03Component } from './chap09-subchap03.component';

describe('Chap09Subchap03Component', () => {
  let component: Chap09Subchap03Component;
  let fixture: ComponentFixture<Chap09Subchap03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap09Subchap03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap09Subchap03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
