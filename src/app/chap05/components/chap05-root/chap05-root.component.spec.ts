import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap05RootComponent } from './chap05-root.component';

describe('Chap05RootComponent', () => {
  let component: Chap05RootComponent;
  let fixture: ComponentFixture<Chap05RootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap05RootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap05RootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
