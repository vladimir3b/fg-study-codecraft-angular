import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap14RootComponent } from './chap14-root.component';

describe('Chap14RootComponent', () => {
  let component: Chap14RootComponent;
  let fixture: ComponentFixture<Chap14RootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap14RootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap14RootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
