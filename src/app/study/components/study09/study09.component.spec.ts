import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Study09Component } from './study09.component';

describe('Study09Component', () => {
  let component: Study09Component;
  let fixture: ComponentFixture<Study09Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Study09Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Study09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
