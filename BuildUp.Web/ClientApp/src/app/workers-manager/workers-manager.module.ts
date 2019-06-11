import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataViewModule } from 'primeng/dataview';

import { WorkersManagerRoutingModule } from './workers-manager-routing.module';
import { WorkerSearchComponent } from './worker-search/worker-search.component';

@NgModule({
  declarations: [WorkerSearchComponent],
  imports: [
    CommonModule,
    WorkersManagerRoutingModule,
    DataViewModule
  ]
})
export class WorkersManagerModule { }
