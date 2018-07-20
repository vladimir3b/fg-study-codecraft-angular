import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap04ListOnePersonComponent } from './chap04-list-one-person.component';

describe('Chap04ListOnePersonComponent', () => {
  let component: Chap04ListOnePersonComponent;
  let fixture: ComponentFixture<Chap04ListOnePersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap04ListOnePersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap04ListOnePersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
