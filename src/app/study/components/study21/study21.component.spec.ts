import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Study21Component } from './study21.component';

describe('Study21Component', () => {
  let component: Study21Component;
  let fixture: ComponentFixture<Study21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Study21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Study21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
