import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap02RootComponent } from './chap02-root.component';

describe('Chap02RootComponent', () => {
  let component: Chap02RootComponent;
  let fixture: ComponentFixture<Chap02RootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap02RootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap02RootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
