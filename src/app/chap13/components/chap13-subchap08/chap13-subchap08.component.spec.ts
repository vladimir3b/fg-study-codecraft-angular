import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap13Subchap08Component } from './chap13-subchap08.component';

describe('Chap13Subchap08Component', () => {
  let component: Chap13Subchap08Component;
  let fixture: ComponentFixture<Chap13Subchap08Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap13Subchap08Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap13Subchap08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
