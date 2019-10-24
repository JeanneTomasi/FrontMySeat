import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilButtonComponent } from './accueil-button.component';

describe('AccueilButtonComponent', () => {
  let component: AccueilButtonComponent;
  let fixture: ComponentFixture<AccueilButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
