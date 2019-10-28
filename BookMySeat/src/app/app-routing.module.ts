import { GestionUtilisateursComponent } from './crud/gestion-utilisateurs/gestion-utilisateurs.component';
import { GestionLignesComponent } from './crud/gestion-lignes/gestion-lignes.component';
import { GestionAdministrationComponent } from './crud/gestion-administration/gestion-administration.component';
import { FormulaireComponent } from './inscription/formulaire/formulaire.component';
import { CrudComponent } from './crud/crud.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { VehicleEditComponent } from './crud/vehicle/vehicle-edit/vehicle-edit.component';
import { VehicleListComponent } from './crud/vehicle/vehicle-list/vehicle-list.component';
import { UserEditComponent } from './crud/user/user-edit/user-edit.component';
import { UserListComponent } from './crud/user/user-list/user-list.component';
import { TransportenterpriseEditComponent } from './crud/transportenterprise/transportenterprise-edit/transportenterprise-edit.component';
import { TransportenterpriseListComponent } from './crud/transportenterprise/transportenterprise-list/transportenterprise-list.component';
import { TransittimeEditComponent } from './crud/transittime/transittime-edit/transittime-edit.component';
import { TransittimeListComponent } from './crud/transittime/transittime-list/transittime-list.component';
import { TransittimeFormComponent } from './crud/transittime/transittime-form/transittime-form.component';
import { StationEditComponent } from './crud/station/station-edit/station-edit.component';
import { StationListComponent } from './crud/station/station-list/station-list.component';
import { SeatreservationEditComponent } from './crud/seatreservation/seatreservation-edit/seatreservation-edit.component';
import { SeatreservationListComponent } from './crud/seatreservation/seatreservation-list/seatreservation-list.component';
import { SeatEditComponent } from './crud/seat/seat-edit/seat-edit.component';
import { SeatListComponent } from './crud/seat/seat-list/seat-list.component';
import { ReserverComponent } from './reserver/reserver.component';
import { MonProfilComponent } from './mon-profil/mon-profil.component';
import { MesLignesComponent } from './mes-lignes/mes-lignes.component';
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
import { TraficActuComponent } from './trafic-actu/trafic-actu.component';


const routes: Routes = [

  {
    path: 'crud', component: CrudComponent
  },
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
      { path: 'form', component: SeatFormComponent },
      { path: 'list', component: SeatListComponent },
      { path: 'edit/:id', component: SeatEditComponent }
    ]
  },
  {
    path: 'reservation', component: SeatreservationComponent, children: [
      { path: 'form', component: SeatreservationFormComponent },
      { path: 'list', component: SeatreservationListComponent },
      { path: 'edit/:id', component: SeatreservationEditComponent }
    ]
  },
  {
    path: 'station', component: StationComponent, children: [
      { path: 'form', component: StationFormComponent },
      { path: 'list', component: StationListComponent },
      { path: 'edit/:id', component: StationEditComponent }
    ]
  },
  {
    path: 'transitTime', component: TransittimeComponent, children: [
      { path: 'form', component: TransittimeFormComponent },
      { path: 'list', component: TransittimeListComponent },
      { path: 'edit/:id', component: TransittimeEditComponent }
    ]
  },
  {
    path: 'transportEnterprise', component: TransportenterpriseComponent, children: [
      { path: 'form', component: TransportenterpriseFormComponent },
      { path: 'list', component: TransportenterpriseListComponent },
      { path: 'edit/:id', component: TransportenterpriseEditComponent }
    ]
  },
  {
    path: 'user', component: UserComponent, children: [
      { path: 'form', component: UserFormComponent },
      { path: 'list', component: UserListComponent },
      { path: 'edit/:id', component: UserEditComponent }
    ]
  },
  {
    path: 'vehicle', component: VehicleComponent, children: [
      { path: 'form', component: VehicleFormComponent },
      { path: 'list', component: VehicleListComponent },
      { path: 'edit/:id', component: VehicleEditComponent }
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
  { path: 'mes-lignes', component: MesLignesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'trafic', component: TraficComponent },
  { path: 'mon-profil', component: MonProfilComponent },
  { path: 'reserver', component: ReserverComponent },
  { path: 'trafic-actu', component: TraficActuComponent },
  { path: 'administration', component: GestionAdministrationComponent },
  { path: 'lignes', component: GestionLignesComponent },
  { path: 'utilisateurs', component: GestionUtilisateursComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
