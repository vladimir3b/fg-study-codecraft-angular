import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullNameInputComponent } from './full-name-input.component';

describe('FullNameInputComponent', () => {
  let component: FullNameInputComponent;
  let fixture: ComponentFixture<FullNameInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullNameInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullNameInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
