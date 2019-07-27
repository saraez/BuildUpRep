import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkersManagerRoutingModule } from './workers-manager-routing.module';
import { WorkerSearchComponent } from './worker-search/worker-search.component';
import { WorkersModule } from '../workers/workers.module';


@NgModule({
  declarations: [WorkerSearchComponent, ],
  imports: [
    CommonModule,
    WorkersManagerRoutingModule,
    WorkersModule
  ]
  
})
export class WorkersManagerModule { }
