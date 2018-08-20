import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Study10Component } from './study10.component';

describe('Study10Component', () => {
  let component: Study10Component;
  let fixture: ComponentFixture<Study10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Study10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Study10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
