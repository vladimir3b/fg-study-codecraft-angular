import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap15Subchap07Component } from './chap15-subchap07.component';

describe('Chap15Subchap07Component', () => {
  let component: Chap15Subchap07Component;
  let fixture: ComponentFixture<Chap15Subchap07Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap15Subchap07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap15Subchap07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
