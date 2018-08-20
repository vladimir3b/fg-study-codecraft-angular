import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap13Subchap07Component } from './chap13-subchap07.component';

describe('Chap13Subchap07Component', () => {
  let component: Chap13Subchap07Component;
  let fixture: ComponentFixture<Chap13Subchap07Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap13Subchap07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap13Subchap07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
