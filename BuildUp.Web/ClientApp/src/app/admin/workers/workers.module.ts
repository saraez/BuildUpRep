import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkerSearchFormComponent } from './worker-search-form/worker-search-form.component';
import { WorkerListComponent } from './worker-list/worker-list.component';
import { WorkerDetailsComponent } from './worker-details/worker-details.component';
import { DataViewModule } from 'primeng/dataview';
import { DynamicDialogModule } from 'primeng/components/dynamicdialog/dynamicdialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [WorkerSearchFormComponent, WorkerListComponent, WorkerDetailsComponent],
  imports: [
    CommonModule,
    DataViewModule,
    DynamicDialogModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  entryComponents: [WorkerDetailsComponent],
  exports: [WorkerSearchFormComponent, WorkerListComponent, WorkerDetailsComponent]
})
export class WorkersModule { }
