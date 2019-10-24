import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectivityComponent } from './collectivity.component';

describe('CollectivityComponent', () => {
  let component: CollectivityComponent;
  let fixture: ComponentFixture<CollectivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
