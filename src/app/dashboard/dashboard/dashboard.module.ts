import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard.component';
import { ListComponent } from 'src/app/list/list.component';
import { FormsModule } from '@angular/forms';
import { DashboardRoutingModule } from 'src/app/dashboard-routing/dashboard-routing.module';
import { RouterOutlet } from '@angular/router';
import { AddlistComponent } from 'src/app/addlist/addlist.component';

@NgModule({
  declarations: [DashboardComponent, ListComponent, AddlistComponent],
  imports: [CommonModule, FormsModule, DashboardRoutingModule, RouterOutlet],
})
export class DashboardModule {}
