import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap13Subchap10Component } from './chap13-subchap10.component';

describe('Chap13Subchap10Component', () => {
  let component: Chap13Subchap10Component;
  let fixture: ComponentFixture<Chap13Subchap10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap13Subchap10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap13Subchap10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
