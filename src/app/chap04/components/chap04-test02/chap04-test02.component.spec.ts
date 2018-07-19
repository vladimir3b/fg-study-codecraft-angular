import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap04Test02Component } from './chap04-test02.component';

describe('Chap04Test02Component', () => {
  let component: Chap04Test02Component;
  let fixture: ComponentFixture<Chap04Test02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap04Test02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap04Test02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
