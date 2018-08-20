import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Study20Component } from './study20.component';

describe('Study20Component', () => {
  let component: Study20Component;
  let fixture: ComponentFixture<Study20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Study20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Study20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
