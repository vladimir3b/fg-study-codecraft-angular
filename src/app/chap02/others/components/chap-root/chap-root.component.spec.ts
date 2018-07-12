import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapRootComponent } from './chap-root.component';

describe('ChapRootComponent', () => {
  let component: ChapRootComponent;
  let fixture: ComponentFixture<ChapRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
