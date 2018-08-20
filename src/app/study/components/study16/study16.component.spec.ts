import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Study16Component } from './study16.component';

describe('Study16Component', () => {
  let component: Study16Component;
  let fixture: ComponentFixture<Study16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Study16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Study16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
