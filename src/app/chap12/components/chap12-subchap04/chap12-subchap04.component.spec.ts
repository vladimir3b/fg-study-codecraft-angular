import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap12Subchap04Component } from './chap12-subchap04.component';

describe('Chap12Subchap04Component', () => {
  let component: Chap12Subchap04Component;
  let fixture: ComponentFixture<Chap12Subchap04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap12Subchap04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap12Subchap04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
