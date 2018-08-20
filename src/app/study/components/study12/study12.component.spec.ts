import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Study12Component } from './study12.component';

describe('Study12Component', () => {
  let component: Study12Component;
  let fixture: ComponentFixture<Study12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Study12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Study12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
