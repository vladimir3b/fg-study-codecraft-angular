import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap01Subchap01Component } from './chap01-subchap01.component';

describe('Chap01Subchap01Component', () => {
  let component: Chap01Subchap01Component;
  let fixture: ComponentFixture<Chap01Subchap01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap01Subchap01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap01Subchap01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
