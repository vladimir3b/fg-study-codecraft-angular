import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap01RootComponent } from './chap01-root.component';

describe('Chap01RootComponent', () => {
  let component: Chap01RootComponent;
  let fixture: ComponentFixture<Chap01RootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap01RootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap01RootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
