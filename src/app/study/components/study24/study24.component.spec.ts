import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Study24Component } from './study24.component';

describe('Study24Component', () => {
  let component: Study24Component;
  let fixture: ComponentFixture<Study24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Study24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Study24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
