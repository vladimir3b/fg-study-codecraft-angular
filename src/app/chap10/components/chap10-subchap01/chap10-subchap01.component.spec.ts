import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap10Subchap01Component } from './chap10-subchap01.component';

describe('Chap10Subchap01Component', () => {
  let component: Chap10Subchap01Component;
  let fixture: ComponentFixture<Chap10Subchap01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap10Subchap01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap10Subchap01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
