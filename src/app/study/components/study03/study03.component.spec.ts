import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Study03Component } from './study03.component';

describe('Study03Component', () => {
  let component: Study03Component;
  let fixture: ComponentFixture<Study03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Study03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Study03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
