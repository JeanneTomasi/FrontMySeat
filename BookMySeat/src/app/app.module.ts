import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollectivityComponent } from './collectivity/collectivity.component';
import { CollectivityFormComponent } from './collectivity/collectivity-form/collectivity-form.component';
import { LineComponent } from './line/line.component';
import { LineFormComponent } from './line/line-form/line-form.component';
import { SeatComponent } from './seat/seat.component';
import { SeatFormComponent } from './seat/seat-form/seat-form.component';
import { SeatreservationComponent } from './seatreservation/seatreservation.component';
import { SeatreservationFormComponent } from './seatreservation/seatreservation-form/seatreservation-form.component';
import { StationComponent } from './station/station.component';
import { StationFormComponent } from './station/station-form/station-form.component';
import { StationListComponent } from './station/station-list/station-list.component';
import { TransittimeComponent } from './transittime/transittime.component';
import { TransportenterpriseComponent } from './transportenterprise/transportenterprise.component';
import { TransportenterpriseFormComponent } from './transportenterprise/transportenterprise-form/transportenterprise-form.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehicleFormComponent } from './vehicle/vehicle-form/vehicle-form.component';
import { VehicleListComponent } from './vehicle/vehicle-list/vehicle-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CollectivityComponent,
    CollectivityFormComponent,
    LineComponent,
    LineFormComponent,
    SeatComponent,
    SeatFormComponent,
    SeatreservationComponent,
    SeatreservationFormComponent,
    StationComponent,
    StationFormComponent,
    StationListComponent,
    TransittimeComponent,
    TransportenterpriseComponent,
    TransportenterpriseFormComponent,
    UserComponent,
    UserListComponent,
    UserFormComponent,
    VehicleComponent,
    VehicleFormComponent,
    VehicleListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
