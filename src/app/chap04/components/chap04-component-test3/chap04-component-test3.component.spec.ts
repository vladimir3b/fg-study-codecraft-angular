import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap04ComponentTest3Component } from './chap04-component-test3.component';

describe('Chap04ComponentTest3Component', () => {
  let component: Chap04ComponentTest3Component;
  let fixture: ComponentFixture<Chap04ComponentTest3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap04ComponentTest3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap04ComponentTest3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
