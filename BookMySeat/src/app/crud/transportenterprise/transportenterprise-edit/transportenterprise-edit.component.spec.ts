import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportenterpriseEditComponent } from './transportenterprise-edit.component';

describe('TransportenterpriseEditComponent', () => {
  let component: TransportenterpriseEditComponent;
  let fixture: ComponentFixture<TransportenterpriseEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportenterpriseEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportenterpriseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
