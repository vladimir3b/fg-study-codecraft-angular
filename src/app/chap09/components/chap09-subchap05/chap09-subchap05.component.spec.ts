import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap09Subchap05Component } from './chap09-subchap05.component';

describe('Chap09Subchap05Component', () => {
  let component: Chap09Subchap05Component;
  let fixture: ComponentFixture<Chap09Subchap05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap09Subchap05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap09Subchap05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
