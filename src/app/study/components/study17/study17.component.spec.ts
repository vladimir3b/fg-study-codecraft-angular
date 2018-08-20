import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Study17Component } from './study17.component';

describe('Study17Component', () => {
  let component: Study17Component;
  let fixture: ComponentFixture<Study17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Study17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Study17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
