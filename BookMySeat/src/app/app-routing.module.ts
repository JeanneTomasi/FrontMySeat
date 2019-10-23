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
    path: 'user', component: UserComponent, children: [
      { path: 'form', component: UserFormComponent }
    ]
  },
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
  { path: '', redirectTo: '/collectivity', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
