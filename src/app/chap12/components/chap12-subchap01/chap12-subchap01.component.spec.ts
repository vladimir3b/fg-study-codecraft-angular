import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap12Subchap01Component } from './chap12-subchap01.component';

describe('Chap12Subchap01Component', () => {
  let component: Chap12Subchap01Component;
  let fixture: ComponentFixture<Chap12Subchap01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap12Subchap01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap12Subchap01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
