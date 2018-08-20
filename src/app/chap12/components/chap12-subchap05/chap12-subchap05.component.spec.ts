import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap12Subchap05Component } from './chap12-subchap05.component';

describe('Chap12Subchap05Component', () => {
  let component: Chap12Subchap05Component;
  let fixture: ComponentFixture<Chap12Subchap05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap12Subchap05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap12Subchap05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
