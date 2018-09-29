import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullNameTextareaComponent } from './full-name-textarea.component';

describe('FullNameTextareaComponent', () => {
  let component: FullNameTextareaComponent;
  let fixture: ComponentFixture<FullNameTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullNameTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullNameTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
