import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap13Subchap05Component } from './chap13-subchap05.component';

describe('Chap13Subchap05Component', () => {
  let component: Chap13Subchap05Component;
  let fixture: ComponentFixture<Chap13Subchap05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap13Subchap05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap13Subchap05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
