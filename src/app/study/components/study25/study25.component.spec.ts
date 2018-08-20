import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Study25Component } from './study25.component';

describe('Study25Component', () => {
  let component: Study25Component;
  let fixture: ComponentFixture<Study25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Study25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Study25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
