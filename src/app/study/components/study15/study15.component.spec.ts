import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Study15Component } from './study15.component';

describe('Study15Component', () => {
  let component: Study15Component;
  let fixture: ComponentFixture<Study15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Study15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Study15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
