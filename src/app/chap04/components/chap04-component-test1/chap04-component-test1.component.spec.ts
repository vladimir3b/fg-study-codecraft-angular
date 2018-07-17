import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap04ComponentTest1Component } from './chap04-component-test1.component';

describe('Chap04ComponentTest1Component', () => {
  let component: Chap04ComponentTest1Component;
  let fixture: ComponentFixture<Chap04ComponentTest1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap04ComponentTest1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap04ComponentTest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
