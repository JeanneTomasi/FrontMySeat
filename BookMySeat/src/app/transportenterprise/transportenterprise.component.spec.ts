import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportenterpriseComponent } from './transportenterprise.component';

describe('TransportenterpriseComponent', () => {
  let component: TransportenterpriseComponent;
  let fixture: ComponentFixture<TransportenterpriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportenterpriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportenterpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
