import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap02Subchap07Component } from './chap02-subchap07.component';

describe('Chap02Subchap07Component', () => {
  let component: Chap02Subchap07Component;
  let fixture: ComponentFixture<Chap02Subchap07Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap02Subchap07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap02Subchap07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
