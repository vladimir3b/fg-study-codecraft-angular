import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap07Subchap02Component } from './chap07-subchap02.component';

describe('Chap07Subchap02Component', () => {
  let component: Chap07Subchap02Component;
  let fixture: ComponentFixture<Chap07Subchap02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap07Subchap02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap07Subchap02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
