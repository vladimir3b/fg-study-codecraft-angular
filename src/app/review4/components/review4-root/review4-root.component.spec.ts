import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Review4RootComponent } from './review4-root.component';

describe('Review4RootComponent', () => {
  let component: Review4RootComponent;
  let fixture: ComponentFixture<Review4RootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Review4RootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Review4RootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
