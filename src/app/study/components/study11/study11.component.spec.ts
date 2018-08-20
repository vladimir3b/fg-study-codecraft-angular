import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Study11Component } from './study11.component';

describe('Study11Component', () => {
  let component: Study11Component;
  let fixture: ComponentFixture<Study11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Study11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Study11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
