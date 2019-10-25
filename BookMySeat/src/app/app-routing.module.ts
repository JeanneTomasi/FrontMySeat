import { InscriptionComponent } from './inscription/inscription.component';
import { FormulaireComponent } from './login/formulaire/formulaire.component';
import { LineEditComponent } from './crud/line/line-edit/line-edit.component';
import { LineListComponent } from './crud/line/line-list/line-list.component';
import { CollectivityEditComponent } from './crud/collectivity/collectivity-edit/collectivity-edit.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ActualiteComponent } from './accueil/actualite/actualite.component';
import { LoginComponent } from './login/login.component';
import { VehicleFormComponent } from './crud/vehicle/vehicle-form/vehicle-form.component';
import { VehicleComponent } from './crud/vehicle/vehicle.component';
import { UserFormComponent } from './crud/user/user-form/user-form.component';
import { UserComponent } from './crud/user/user.component';
import { TransportenterpriseFormComponent } from './crud/transportenterprise/transportenterprise-form/transportenterprise-form.component';
import { TransportenterpriseComponent } from './crud/transportenterprise/transportenterprise.component';
import { TransittimeComponent } from './crud/transittime/transittime.component';
import { StationFormComponent } from './crud/station/station-form/station-form.component';
import { SeatreservationComponent } from './crud/seatreservation/seatreservation.component';
import { StationComponent } from './crud/station/station.component';
import { SeatreservationFormComponent } from './crud/seatreservation/seatreservation-form/seatreservation-form.component';
import { SeatFormComponent } from './crud/seat/seat-form/seat-form.component';
import { SeatComponent } from './crud/seat/seat.component';
import { LineFormComponent } from './crud/line/line-form/line-form.component';
import { LineComponent } from './crud/line/line.component';
import { CollectivityListComponent } from './crud/collectivity/collectivity-list/collectivity-list.component';
import { CollectivityFormComponent } from './crud/collectivity/collectivity-form/collectivity-form.component';
import { CollectivityComponent } from './crud/collectivity/collectivity.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthentificationComponent } from './accueil/authentification/authentification.component';
import { TraficComponent } from './accueil/trafic/trafic.component';


const routes: Routes = [
  {
    path: 'collectivity', component: CollectivityComponent, children: [
      { path: 'form', component: CollectivityFormComponent },
      { path: 'list', component: CollectivityListComponent },
      { path: 'edit/:id', component: CollectivityEditComponent }
    ]
  },
  {
    path: 'line', component: LineComponent, children: [
      { path: 'form', component: LineFormComponent },
      { path: 'list', component: LineListComponent },
      { path: 'edit/:id', component: LineEditComponent }
    ]
  },
  {
    path: 'seat', component: SeatComponent, children: [
      { path: 'form', component: SeatFormComponent }
    ]
  },
  {
    path: 'reservation', component: SeatreservationComponent, children: [
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
    path: 'inscription', component: InscriptionComponent, children: [
      { path: 'formulaire', component: FormulaireComponent }
    ]
  },
  {
    path: 'accueil', component: AccueilComponent, children: [
      { path: 'actualite', component: ActualiteComponent },
      { path: 'authentification', component: AuthentificationComponent },
      { path: 'trafic', component: TraficComponent }
    ]
  },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
