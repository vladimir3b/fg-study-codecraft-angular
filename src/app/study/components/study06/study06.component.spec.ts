import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Study06Component } from './study06.component';

describe('Study06Component', () => {
  let component: Study06Component;
  let fixture: ComponentFixture<Study06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Study06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Study06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
