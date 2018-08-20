import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Study18Component } from './study18.component';

describe('Study18Component', () => {
  let component: Study18Component;
  let fixture: ComponentFixture<Study18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Study18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Study18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
