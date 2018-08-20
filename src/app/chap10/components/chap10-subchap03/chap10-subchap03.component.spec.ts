import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap10Subchap03Component } from './chap10-subchap03.component';

describe('Chap10Subchap03Component', () => {
  let component: Chap10Subchap03Component;
  let fixture: ComponentFixture<Chap10Subchap03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap10Subchap03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap10Subchap03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
