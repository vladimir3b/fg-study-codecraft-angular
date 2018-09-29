import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullNameChangerComponent } from './full-name-changer.component';

describe('FullNameChangerComponent', () => {
  let component: FullNameChangerComponent;
  let fixture: ComponentFixture<FullNameChangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullNameChangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullNameChangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
