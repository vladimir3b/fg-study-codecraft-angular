import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Study13Component } from './study13.component';

describe('Study13Component', () => {
  let component: Study13Component;
  let fixture: ComponentFixture<Study13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Study13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Study13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
