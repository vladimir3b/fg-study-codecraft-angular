import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap04RootComponent } from './chap04-root.component';

describe('Chap04RootComponent', () => {
  let component: Chap04RootComponent;
  let fixture: ComponentFixture<Chap04RootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap04RootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap04RootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
