import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectivityEditComponent } from './collectivity-edit.component';

describe('CollectivityEditComponent', () => {
  let component: CollectivityEditComponent;
  let fixture: ComponentFixture<CollectivityEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectivityEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectivityEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
