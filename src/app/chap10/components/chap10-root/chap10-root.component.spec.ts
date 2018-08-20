import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap10RootComponent } from './chap10-root.component';

describe('Chap10RootComponent', () => {
  let component: Chap10RootComponent;
  let fixture: ComponentFixture<Chap10RootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap10RootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap10RootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
