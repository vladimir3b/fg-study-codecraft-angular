import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap15Subchap03Component } from './chap15-subchap03.component';

describe('Chap15Subchap03Component', () => {
  let component: Chap15Subchap03Component;
  let fixture: ComponentFixture<Chap15Subchap03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap15Subchap03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap15Subchap03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
