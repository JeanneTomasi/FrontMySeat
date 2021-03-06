import { FormulaireComponent } from './inscription/formulaire/formulaire.component';
import { TransportEnterpriseService } from './../services/transportenterprise.service';
import { VehicleService } from './../services/vehicle.service';
import { UserService } from './../services/user.service';
import { TransitTimeService } from './../services/transittime.service';
import { StationService } from './../services/station.service';
import { SeatReservationService } from './../services/seatreservation.service';
import { SeatService } from './../services/seat.service';
import { LineService } from './../services/line.service';
import { CollectivityService } from './../services/collectivity.service';
import { CollectivityListComponent } from './crud/collectivity/collectivity-list/collectivity-list.component';
import { VehicleListComponent } from './crud/vehicle/vehicle-list/vehicle-list.component';
import { VehicleFormComponent } from './crud/vehicle/vehicle-form/vehicle-form.component';
import { VehicleComponent } from './crud/vehicle/vehicle.component';
import { UserFormComponent } from './crud/user/user-form/user-form.component';
import { UserListComponent } from './crud/user/user-list/user-list.component';
import { UserComponent } from './crud/user/user.component';
import { TransportenterpriseFormComponent } from './crud/transportenterprise/transportenterprise-form/transportenterprise-form.component';
import { TransportenterpriseComponent } from './crud/transportenterprise/transportenterprise.component';
import { TransittimeComponent } from './crud/transittime/transittime.component';
import { StationListComponent } from './crud/station/station-list/station-list.component';
import { StationFormComponent } from './crud/station/station-form/station-form.component';
import { StationComponent } from './crud/station/station.component';
import { SeatreservationFormComponent } from './crud/seatreservation/seatreservation-form/seatreservation-form.component';
import { SeatreservationComponent } from './crud/seatreservation/seatreservation.component';
import { SeatFormComponent } from './crud/seat/seat-form/seat-form.component';
import { SeatComponent } from './crud/seat/seat.component';
import { LineFormComponent } from './crud/line/line-form/line-form.component';
import { LineComponent } from './crud/line/line.component';
import { CollectivityFormComponent } from './crud/collectivity/collectivity-form/collectivity-form.component';
import { CollectivityComponent } from './crud/collectivity/collectivity.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoginComponent } from './login/login.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ActualiteComponent } from './accueil/actualite/actualite.component';
import { TraficComponent } from './accueil/trafic/trafic.component';
import { AuthentificationComponent } from './accueil/authentification/authentification.component';
import { AccueilButtonComponent } from './accueil-button/accueil-button.component';
import { CitationComponent } from './citation/citation.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MesLignesComponent } from './mes-lignes/mes-lignes.component';
import { TraficActuComponent } from './trafic-actu/trafic-actu.component';
import { ReserverComponent } from './reserver/reserver.component';
import { ValidationComponent } from './reserver/validation/validation.component';
import { MonProfilComponent } from './mon-profil/mon-profil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from '../material-module';
import { CollectivityEditComponent } from './crud/collectivity/collectivity-edit/collectivity-edit.component';
import { LineListComponent } from './crud/line/line-list/line-list.component';
import { LineEditComponent } from './crud/line/line-edit/line-edit.component';
import { SeatListComponent } from './crud/seat/seat-list/seat-list.component';
import { SeatEditComponent } from './crud/seat/seat-edit/seat-edit.component';
import { SeatreservationListComponent } from './crud/seatreservation/seatreservation-list/seatreservation-list.component';
import { SeatreservationEditComponent } from './crud/seatreservation/seatreservation-edit/seatreservation-edit.component';
import { StationEditComponent } from './crud/station/station-edit/station-edit.component';
import { TransittimeFormComponent } from './crud/transittime/transittime-form/transittime-form.component';
import { TransittimeEditComponent } from './crud/transittime/transittime-edit/transittime-edit.component';
import { TransittimeListComponent } from './crud/transittime/transittime-list/transittime-list.component';
import { TransportenterpriseListComponent } from './crud/transportenterprise/transportenterprise-list/transportenterprise-list.component';
import { TransportenterpriseEditComponent } from './crud/transportenterprise/transportenterprise-edit/transportenterprise-edit.component';
import { UserEditComponent } from './crud/user/user-edit/user-edit.component';
import { VehicleEditComponent } from './crud/vehicle/vehicle-edit/vehicle-edit.component';
import { CrudComponent } from './crud/crud.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { GestionAdministrationComponent } from './crud/gestion-administration/gestion-administration.component';
import { GestionLignesComponent } from './crud/gestion-lignes/gestion-lignes.component';
import { GestionUtilisateursComponent } from './crud/gestion-utilisateurs/gestion-utilisateurs.component';
import { RetourComponent } from './crud/retour/retour.component';

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
    VehicleListComponent,
    LoginComponent,
    CollectivityListComponent,
    AccueilComponent,
    ActualiteComponent,
    TraficComponent,
    AuthentificationComponent,
    AccueilButtonComponent,
    FormulaireComponent,
    CitationComponent,
    InscriptionComponent,
    MenuBarComponent,
    MesLignesComponent,
    TraficActuComponent,
    ReserverComponent,
    ValidationComponent,
    MonProfilComponent,
    CollectivityEditComponent,
    LineListComponent,
    LineEditComponent,
    SeatListComponent,
    SeatEditComponent,
    SeatreservationListComponent,
    SeatreservationEditComponent,
    StationEditComponent,
    TransittimeFormComponent,
    TransittimeEditComponent,
    TransittimeListComponent,
    TransportenterpriseListComponent,
    TransportenterpriseEditComponent,
    UserEditComponent,
    VehicleEditComponent,
    CrudComponent,
    LoginFormComponent,
    GestionAdministrationComponent,
    GestionLignesComponent,
    GestionUtilisateursComponent,
    RetourComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
  ],
  providers: [
    CollectivityService,
    LineService,
    SeatService,
    SeatReservationService,
    StationService,
    TransitTimeService,
    TransportEnterpriseService,
    UserService,
    VehicleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
