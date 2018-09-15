import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Review4ParentComponent } from './review4-parent.component';

describe('Review4ParentComponent', () => {
  let component: Review4ParentComponent;
  let fixture: ComponentFixture<Review4ParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Review4ParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Review4ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
