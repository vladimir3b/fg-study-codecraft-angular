import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap15Subchap05Component } from './chap15-subchap05.component';

describe('Chap15Subchap05Component', () => {
  let component: Chap15Subchap05Component;
  let fixture: ComponentFixture<Chap15Subchap05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap15Subchap05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap15Subchap05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
