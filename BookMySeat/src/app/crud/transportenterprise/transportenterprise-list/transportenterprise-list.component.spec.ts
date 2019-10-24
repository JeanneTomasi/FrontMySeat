import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportenterpriseListComponent } from './transportenterprise-list.component';

describe('TransportenterpriseListComponent', () => {
  let component: TransportenterpriseListComponent;
  let fixture: ComponentFixture<TransportenterpriseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportenterpriseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportenterpriseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
