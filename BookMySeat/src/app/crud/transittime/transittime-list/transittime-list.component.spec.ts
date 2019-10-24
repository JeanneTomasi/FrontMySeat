import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransittimeListComponent } from './transittime-list.component';

describe('TransittimeListComponent', () => {
  let component: TransittimeListComponent;
  let fixture: ComponentFixture<TransittimeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransittimeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransittimeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
