import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataViewModule } from 'primeng/dataview';

import { WorkersManagerRoutingModule } from './workers-manager-routing.module';
import { WorkerSearchComponent } from './worker-search/worker-search.component';
import { WorkerSearchFormComponent } from './worker-search-form/worker-search-form.component';
import { WorkerListComponent } from './worker-list/worker-list.component';
import { WorkerDetailsComponent } from './worker-details/worker-details.component';
import { DynamicDialogModule } from 'primeng/components/dynamicdialog/dynamicdialog';

@NgModule({
  declarations: [WorkerSearchComponent, WorkerSearchFormComponent, WorkerListComponent, WorkerDetailsComponent],
  imports: [
    CommonModule,
    WorkersManagerRoutingModule,
    DataViewModule,
    DynamicDialogModule
  ],
  entryComponents: [WorkerDetailsComponent]
})
export class WorkersManagerModule { }
