import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap13Subchap13Component } from './chap13-subchap13.component';

describe('Chap13Subchap13Component', () => {
  let component: Chap13Subchap13Component;
  let fixture: ComponentFixture<Chap13Subchap13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap13Subchap13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap13Subchap13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
