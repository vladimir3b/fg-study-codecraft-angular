import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap05Subchap01Component } from './chap05-subchap01.component';

describe('Chap05Subchap01Component', () => {
  let component: Chap05Subchap01Component;
  let fixture: ComponentFixture<Chap05Subchap01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap05Subchap01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap05Subchap01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
