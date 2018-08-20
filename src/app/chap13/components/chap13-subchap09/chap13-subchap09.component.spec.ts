import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap13Subchap09Component } from './chap13-subchap09.component';

describe('Chap13Subchap09Component', () => {
  let component: Chap13Subchap09Component;
  let fixture: ComponentFixture<Chap13Subchap09Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap13Subchap09Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap13Subchap09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
