import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap06Subchap01Component } from './chap06-subchap01.component';

describe('Chap06Subchap01Component', () => {
  let component: Chap06Subchap01Component;
  let fixture: ComponentFixture<Chap06Subchap01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap06Subchap01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap06Subchap01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
