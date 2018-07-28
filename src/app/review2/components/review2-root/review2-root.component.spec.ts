import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Review2RootComponent } from './review2-root.component';

describe('Review2RootComponent', () => {
  let component: Review2RootComponent;
  let fixture: ComponentFixture<Review2RootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Review2RootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Review2RootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
