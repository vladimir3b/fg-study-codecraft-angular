import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Review1RootComponent } from './review1-root.component';

describe('Review1RootComponent', () => {
  let component: Review1RootComponent;
  let fixture: ComponentFixture<Review1RootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Review1RootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Review1RootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
