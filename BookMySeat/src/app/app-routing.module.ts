import { LoginComponent } from './login/login.component';
import { VehicleFormComponent } from './vehicle/vehicle-form/vehicle-form.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { TransportenterpriseFormComponent } from './transportenterprise/transportenterprise-form/transportenterprise-form.component';
import { TransportenterpriseComponent } from './transportenterprise/transportenterprise.component';
import { TransittimeComponent } from './transittime/transittime.component';
import { StationFormComponent } from './station/station-form/station-form.component';
import { StationComponent } from './station/station.component';
import { SeatreservationFormComponent } from './seatreservation/seatreservation-form/seatreservation-form.component';
import { SeatFormComponent } from './seat/seat-form/seat-form.component';
import { SeatComponent } from './seat/seat.component';
import { LineFormComponent } from './line/line-form/line-form.component';
import { LineComponent } from './line/line.component';
import { CollectivityFormComponent } from './collectivity/collectivity-form/collectivity-form.component';
import { CollectivityComponent } from './collectivity/collectivity.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'collectivity', component: CollectivityComponent, children: [
      { path: 'form', component: CollectivityFormComponent }
    ]
  },
  {
    path: 'line', component: LineComponent, children: [
      { path: 'form', component: LineFormComponent }
    ]
  },
  {
    path: 'seat', component: SeatComponent, children: [
      { path: 'form', component: SeatFormComponent }
    ]
  },
  {
    path: 'reservation', component: SeatreservationFormComponent, children: [
      { path: 'form', component: SeatreservationFormComponent }
    ]
  },
  {
    path: 'station', component: StationComponent, children: [
      { path: 'form', component: StationFormComponent }
    ]
  },
  {
    path: 'transitTime', component: TransittimeComponent
  },
  {
    path: 'transportEnterprise', component: TransportenterpriseComponent, children: [
      { path: 'form', component: TransportenterpriseFormComponent }
    ]
  },
  {
    path: 'user', component: UserComponent, children: [
      { path: 'form', component: UserFormComponent }
    ]
  },
  {
    path: 'vehicle', component: VehicleComponent, children: [
      { path: 'form', component: VehicleFormComponent }
    ]
  },
  {
    path: 'login', component: LoginComponent
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
