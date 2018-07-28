import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap08RootComponent } from './chap08-root.component';

describe('Chap08RootComponent', () => {
  let component: Chap08RootComponent;
  let fixture: ComponentFixture<Chap08RootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap08RootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap08RootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
