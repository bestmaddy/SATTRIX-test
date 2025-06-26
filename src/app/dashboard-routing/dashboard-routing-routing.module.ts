import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ListComponent } from '../list/list.component';
import { AddlistComponent } from '../addlist/addlist.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'addlist', component: AddlistComponent },
      { path: 'list', component: ListComponent },
      { path: '**', component: AddlistComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingRoutingModule {}
