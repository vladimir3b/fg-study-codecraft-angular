import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap04Test01Component } from './chap04-test01.component';

describe('Chap04Test01Component', () => {
  let component: Chap04Test01Component;
  let fixture: ComponentFixture<Chap04Test01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap04Test01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap04Test01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
