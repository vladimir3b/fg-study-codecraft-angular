import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap13Subchap11Component } from './chap13-subchap11.component';

describe('Chap13Subchap11Component', () => {
  let component: Chap13Subchap11Component;
  let fixture: ComponentFixture<Chap13Subchap11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap13Subchap11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap13Subchap11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
