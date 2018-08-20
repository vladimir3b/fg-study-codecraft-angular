import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap10Subchap05Component } from './chap10-subchap05.component';

describe('Chap10Subchap05Component', () => {
  let component: Chap10Subchap05Component;
  let fixture: ComponentFixture<Chap10Subchap05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap10Subchap05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap10Subchap05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
