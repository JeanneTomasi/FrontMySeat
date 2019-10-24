import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransittimeComponent } from './transittime.component';

describe('TransittimeComponent', () => {
  let component: TransittimeComponent;
  let fixture: ComponentFixture<TransittimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransittimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransittimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
