import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap15Subchap08Component } from './chap15-subchap08.component';

describe('Chap15Subchap08Component', () => {
  let component: Chap15Subchap08Component;
  let fixture: ComponentFixture<Chap15Subchap08Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap15Subchap08Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap15Subchap08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
