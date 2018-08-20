import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Study22Component } from './study22.component';

describe('Study22Component', () => {
  let component: Study22Component;
  let fixture: ComponentFixture<Study22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Study22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Study22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
