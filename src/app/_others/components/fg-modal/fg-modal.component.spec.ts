import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FgModalComponent } from './fg-modal.component';

describe('FgModalComponent', () => {
  let component: FgModalComponent;
  let fixture: ComponentFixture<FgModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FgModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FgModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
