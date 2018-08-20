import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap12Subchap03Component } from './chap12-subchap03.component';

describe('Chap12Subchap03Component', () => {
  let component: Chap12Subchap03Component;
  let fixture: ComponentFixture<Chap12Subchap03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap12Subchap03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap12Subchap03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
