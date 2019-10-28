import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAdministrationComponent } from './gestion-administration.component';

describe('GestionAdministrationComponent', () => {
  let component: GestionAdministrationComponent;
  let fixture: ComponentFixture<GestionAdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionAdministrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
