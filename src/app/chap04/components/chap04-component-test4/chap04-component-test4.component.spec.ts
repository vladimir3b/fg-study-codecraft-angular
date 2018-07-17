import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap04ComponentTest4Component } from './chap04-component-test4.component';

describe('Chap04ComponentTest4Component', () => {
  let component: Chap04ComponentTest4Component;
  let fixture: ComponentFixture<Chap04ComponentTest4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap04ComponentTest4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap04ComponentTest4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
