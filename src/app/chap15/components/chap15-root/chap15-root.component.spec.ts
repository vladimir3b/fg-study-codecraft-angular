import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap15RootComponent } from './chap15-root.component';

describe('Chap15RootComponent', () => {
  let component: Chap15RootComponent;
  let fixture: ComponentFixture<Chap15RootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap15RootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap15RootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
