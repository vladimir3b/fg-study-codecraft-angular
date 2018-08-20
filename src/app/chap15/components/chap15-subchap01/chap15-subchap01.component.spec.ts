import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap15Subchap01Component } from './chap15-subchap01.component';

describe('Chap15Subchap01Component', () => {
  let component: Chap15Subchap01Component;
  let fixture: ComponentFixture<Chap15Subchap01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap15Subchap01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap15Subchap01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
