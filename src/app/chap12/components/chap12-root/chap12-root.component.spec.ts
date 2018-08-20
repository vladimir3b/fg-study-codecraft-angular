import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap12RootComponent } from './chap12-root.component';

describe('Chap12RootComponent', () => {
  let component: Chap12RootComponent;
  let fixture: ComponentFixture<Chap12RootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap12RootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap12RootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
