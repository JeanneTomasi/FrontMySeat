import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransittimeEditComponent } from './transittime-edit.component';

describe('TransittimeEditComponent', () => {
  let component: TransittimeEditComponent;
  let fixture: ComponentFixture<TransittimeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransittimeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransittimeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
