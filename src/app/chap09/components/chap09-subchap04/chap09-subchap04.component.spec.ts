import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap09Subchap04Component } from './chap09-subchap04.component';

describe('Chap09Subchap04Component', () => {
  let component: Chap09Subchap04Component;
  let fixture: ComponentFixture<Chap09Subchap04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap09Subchap04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap09Subchap04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
