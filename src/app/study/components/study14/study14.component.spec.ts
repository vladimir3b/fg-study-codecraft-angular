import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Study14Component } from './study14.component';

describe('Study14Component', () => {
  let component: Study14Component;
  let fixture: ComponentFixture<Study14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Study14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Study14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
