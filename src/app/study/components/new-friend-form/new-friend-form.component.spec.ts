import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFriendFormComponent } from './new-friend-form.component';

describe('NewFriendFormComponent', () => {
  let component: NewFriendFormComponent;
  let fixture: ComponentFixture<NewFriendFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFriendFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFriendFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
