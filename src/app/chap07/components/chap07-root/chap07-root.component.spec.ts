import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap07RootComponent } from './chap07-root.component';

describe('Chap07RootComponent', () => {
  let component: Chap07RootComponent;
  let fixture: ComponentFixture<Chap07RootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap07RootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap07RootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
