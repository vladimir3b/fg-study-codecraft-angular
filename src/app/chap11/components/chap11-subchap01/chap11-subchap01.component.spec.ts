import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap11Subchap01Component } from './chap11-subchap01.component';

describe('Chap11Subchap01Component', () => {
  let component: Chap11Subchap01Component;
  let fixture: ComponentFixture<Chap11Subchap01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap11Subchap01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap11Subchap01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
