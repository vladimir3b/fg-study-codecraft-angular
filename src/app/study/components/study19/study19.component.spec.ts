import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Study19Component } from './study19.component';

describe('Study19Component', () => {
  let component: Study19Component;
  let fixture: ComponentFixture<Study19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Study19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Study19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
