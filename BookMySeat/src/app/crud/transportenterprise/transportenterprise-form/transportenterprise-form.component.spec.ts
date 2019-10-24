import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportenterpriseFormComponent } from './transportenterprise-form.component';

describe('TransportenterpriseFormComponent', () => {
  let component: TransportenterpriseFormComponent;
  let fixture: ComponentFixture<TransportenterpriseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportenterpriseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportenterpriseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
