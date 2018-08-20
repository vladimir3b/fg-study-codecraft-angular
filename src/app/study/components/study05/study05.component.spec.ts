import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Study05Component } from './study05.component';

describe('Study05Component', () => {
  let component: Study05Component;
  let fixture: ComponentFixture<Study05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Study05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Study05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
