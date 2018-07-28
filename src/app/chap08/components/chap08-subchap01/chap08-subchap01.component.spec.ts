import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap08Subchap01Component } from './chap08-subchap01.component';

describe('Chap08Subchap01Component', () => {
  let component: Chap08Subchap01Component;
  let fixture: ComponentFixture<Chap08Subchap01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap08Subchap01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap08Subchap01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
