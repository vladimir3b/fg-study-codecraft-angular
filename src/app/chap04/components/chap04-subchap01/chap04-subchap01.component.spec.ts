import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap04Subchap01Component } from './chap04-subchap01.component';

describe('Chap04Subchap01Component', () => {
  let component: Chap04Subchap01Component;
  let fixture: ComponentFixture<Chap04Subchap01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap04Subchap01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap04Subchap01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
