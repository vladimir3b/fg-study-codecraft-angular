import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Study23Component } from './study23.component';

describe('Study23Component', () => {
  let component: Study23Component;
  let fixture: ComponentFixture<Study23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Study23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Study23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
