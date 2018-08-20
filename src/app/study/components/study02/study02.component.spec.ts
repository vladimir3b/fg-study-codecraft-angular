import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Study02Component } from './study02.component';

describe('Study02Component', () => {
  let component: Study02Component;
  let fixture: ComponentFixture<Study02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Study02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Study02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
