import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Study04Component } from './study04.component';

describe('Study04Component', () => {
  let component: Study04Component;
  let fixture: ComponentFixture<Study04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Study04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Study04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
