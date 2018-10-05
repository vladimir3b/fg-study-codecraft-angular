import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalToTabComponent } from './modal-to-tab.component';

describe('ModalToTabComponent', () => {
  let component: ModalToTabComponent;
  let fixture: ComponentFixture<ModalToTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalToTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalToTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
