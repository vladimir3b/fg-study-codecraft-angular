import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap07Subchap01Component } from './chap07-subchap01.component';

describe('Chap07Subchap01Component', () => {
  let component: Chap07Subchap01Component;
  let fixture: ComponentFixture<Chap07Subchap01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap07Subchap01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap07Subchap01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
