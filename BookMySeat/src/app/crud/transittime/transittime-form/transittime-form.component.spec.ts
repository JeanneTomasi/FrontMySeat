import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransittimeFormComponent } from './transittime-form.component';

describe('TransittimeFormComponent', () => {
  let component: TransittimeFormComponent;
  let fixture: ComponentFixture<TransittimeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransittimeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransittimeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
