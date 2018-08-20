import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap13RootComponent } from './chap13-root.component';

describe('Chap13RootComponent', () => {
  let component: Chap13RootComponent;
  let fixture: ComponentFixture<Chap13RootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap13RootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap13RootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
