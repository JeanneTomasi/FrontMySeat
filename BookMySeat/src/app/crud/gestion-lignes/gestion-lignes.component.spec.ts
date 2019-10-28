import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionLignesComponent } from './gestion-lignes.component';

describe('GestionLignesComponent', () => {
  let component: GestionLignesComponent;
  let fixture: ComponentFixture<GestionLignesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionLignesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionLignesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
