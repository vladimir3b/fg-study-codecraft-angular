import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap14Subchap01Component } from './chap14-subchap01.component';

describe('Chap14Subchap01Component', () => {
  let component: Chap14Subchap01Component;
  let fixture: ComponentFixture<Chap14Subchap01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap14Subchap01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap14Subchap01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
