import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap04NewPersonComponent } from './chap04-new-person.component';

describe('Chap04NewPersonComponent', () => {
  let component: Chap04NewPersonComponent;
  let fixture: ComponentFixture<Chap04NewPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap04NewPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap04NewPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
