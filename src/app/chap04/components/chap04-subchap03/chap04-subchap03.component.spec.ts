import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap04Subchap03Component } from './chap04-subchap03.component';

describe('Chap04Subchap03Component', () => {
  let component: Chap04Subchap03Component;
  let fixture: ComponentFixture<Chap04Subchap03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap04Subchap03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap04Subchap03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
