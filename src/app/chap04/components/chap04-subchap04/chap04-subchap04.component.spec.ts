import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap04Subchap04Component } from './chap04-subchap04.component';

describe('Chap04Subchap04Component', () => {
  let component: Chap04Subchap04Component;
  let fixture: ComponentFixture<Chap04Subchap04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap04Subchap04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap04Subchap04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
