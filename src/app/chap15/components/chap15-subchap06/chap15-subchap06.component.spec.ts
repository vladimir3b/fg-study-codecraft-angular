import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap15Subchap06Component } from './chap15-subchap06.component';

describe('Chap15Subchap06Component', () => {
  let component: Chap15Subchap06Component;
  let fixture: ComponentFixture<Chap15Subchap06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap15Subchap06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap15Subchap06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
