import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Review3RootComponent } from './review3-root.component';

describe('Review3RootComponent', () => {
  let component: Review3RootComponent;
  let fixture: ComponentFixture<Review3RootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Review3RootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Review3RootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
