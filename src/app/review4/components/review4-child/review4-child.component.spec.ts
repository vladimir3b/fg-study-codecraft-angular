import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Review4ChildComponent } from './review4-child.component';

describe('Review4ChildComponent', () => {
  let component: Review4ChildComponent;
  let fixture: ComponentFixture<Review4ChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Review4ChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Review4ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
