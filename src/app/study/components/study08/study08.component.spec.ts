import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Study08Component } from './study08.component';

describe('Study08Component', () => {
  let component: Study08Component;
  let fixture: ComponentFixture<Study08Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Study08Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Study08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
