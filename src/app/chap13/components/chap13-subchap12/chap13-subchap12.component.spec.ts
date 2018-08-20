import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap13Subchap12Component } from './chap13-subchap12.component';

describe('Chap13Subchap12Component', () => {
  let component: Chap13Subchap12Component;
  let fixture: ComponentFixture<Chap13Subchap12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap13Subchap12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap13Subchap12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
