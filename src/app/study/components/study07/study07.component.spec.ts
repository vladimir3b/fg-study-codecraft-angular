import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Study07Component } from './study07.component';

describe('Study07Component', () => {
  let component: Study07Component;
  let fixture: ComponentFixture<Study07Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Study07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Study07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
