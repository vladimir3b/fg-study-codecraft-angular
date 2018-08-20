import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap11RootComponent } from './chap11-root.component';

describe('Chap11RootComponent', () => {
  let component: Chap11RootComponent;
  let fixture: ComponentFixture<Chap11RootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap11RootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap11RootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
