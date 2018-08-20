import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap13Subchap06Component } from './chap13-subchap06.component';

describe('Chap13Subchap06Component', () => {
  let component: Chap13Subchap06Component;
  let fixture: ComponentFixture<Chap13Subchap06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap13Subchap06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap13Subchap06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
