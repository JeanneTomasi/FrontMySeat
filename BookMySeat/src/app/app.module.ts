import { HttpClientModule } from '@angular/common/http';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoginComponent } from './login/login.component';
import { CollectivityListComponent } from './collectivity/collectivity-list/collectivity-list.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ActualiteComponent } from './accueil/actualite/actualite.component';
import { TraficComponent } from './accueil/trafic/trafic.component';
import { AuthentificationComponent } from './accueil/authentification/authentification.component';
import { AccueilButtonComponent } from './accueil-button/accueil-button.component';
import { FormulaireComponent } from './login/formulaire/formulaire.component';
import { CitationComponent } from './citation/citation.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MesLignesComponent } from './mes-lignes/mes-lignes.component';
import { TraficActuComponent } from './trafic-actu/trafic-actu.component';
import { ReserverComponent } from './reserver/reserver.component';
import { ValidationComponent } from './reserver/validation/validation.component';
import { MonProfilComponent } from './mon-profil/mon-profil.component';


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
    MonProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
