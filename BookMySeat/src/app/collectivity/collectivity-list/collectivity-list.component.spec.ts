import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectivityListComponent } from './collectivity-list.component';

describe('CollectivityListComponent', () => {
  let component: CollectivityListComponent;
  let fixture: ComponentFixture<CollectivityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectivityListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectivityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
