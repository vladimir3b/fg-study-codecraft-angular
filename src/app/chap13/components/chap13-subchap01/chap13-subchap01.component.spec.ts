import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap13Subchap01Component } from './chap13-subchap01.component';

describe('Chap13Subchap01Component', () => {
  let component: Chap13Subchap01Component;
  let fixture: ComponentFixture<Chap13Subchap01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap13Subchap01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap13Subchap01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
