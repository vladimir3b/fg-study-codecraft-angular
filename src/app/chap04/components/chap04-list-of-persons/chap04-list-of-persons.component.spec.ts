import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap04ListOfPersonsComponent } from './chap04-list-of-persons.component';

describe('Chap04ListOfPersonsComponent', () => {
  let component: Chap04ListOfPersonsComponent;
  let fixture: ComponentFixture<Chap04ListOfPersonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap04ListOfPersonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap04ListOfPersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
