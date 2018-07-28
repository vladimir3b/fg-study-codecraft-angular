import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap09Subchap01Component } from './chap09-subchap01.component';

describe('Chap09Subchap01Component', () => {
  let component: Chap09Subchap01Component;
  let fixture: ComponentFixture<Chap09Subchap01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap09Subchap01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap09Subchap01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
