import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap12Subchap06Component } from './chap12-subchap06.component';

describe('Chap12Subchap06Component', () => {
  let component: Chap12Subchap06Component;
  let fixture: ComponentFixture<Chap12Subchap06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap12Subchap06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap12Subchap06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
