import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap09RootComponent } from './chap09-root.component';

describe('Chap09RootComponent', () => {
  let component: Chap09RootComponent;
  let fixture: ComponentFixture<Chap09RootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap09RootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap09RootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
