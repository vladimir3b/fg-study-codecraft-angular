import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Review5RootComponent } from './review5-root.component';

describe('Review5RootComponent', () => {
  let component: Review5RootComponent;
  let fixture: ComponentFixture<Review5RootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Review5RootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Review5RootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
