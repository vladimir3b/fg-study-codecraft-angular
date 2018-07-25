import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap06RootComponent } from './chap06-root.component';

describe('Chap06RootComponent', () => {
  let component: Chap06RootComponent;
  let fixture: ComponentFixture<Chap06RootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap06RootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap06RootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
