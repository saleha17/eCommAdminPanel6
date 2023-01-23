import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActionWindowComponent } from './action-window/action-window.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'actionsWindow', component: ActionWindowComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppsRoutingModule {}
