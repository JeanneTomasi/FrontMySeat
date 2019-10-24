import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectivityFormComponent } from './collectivity-form.component';

describe('CollectivityFormComponent', () => {
  let component: CollectivityFormComponent;
  let fixture: ComponentFixture<CollectivityFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectivityFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectivityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
