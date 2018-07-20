import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap04Test03Component } from './chap04-test03.component';

describe('Chap04Test03Component', () => {
  let component: Chap04Test03Component;
  let fixture: ComponentFixture<Chap04Test03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap04Test03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap04Test03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
