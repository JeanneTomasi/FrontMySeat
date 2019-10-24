import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraficActuComponent } from './trafic-actu.component';

describe('TraficActuComponent', () => {
  let component: TraficActuComponent;
  let fixture: ComponentFixture<TraficActuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraficActuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraficActuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
