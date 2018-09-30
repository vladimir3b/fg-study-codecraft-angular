import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponentWithObjectAsPropertyComponent } from './child-component-with-object-as-property.component';

describe('ChildComponentWithObjectAsPropertyComponent', () => {
  let component: ChildComponentWithObjectAsPropertyComponent;
  let fixture: ComponentFixture<ChildComponentWithObjectAsPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildComponentWithObjectAsPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponentWithObjectAsPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
