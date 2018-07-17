import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap04ComponentTest2Component } from './chap04-component-test2.component';

describe('Chap04ComponentTest2Component', () => {
  let component: Chap04ComponentTest2Component;
  let fixture: ComponentFixture<Chap04ComponentTest2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap04ComponentTest2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap04ComponentTest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
