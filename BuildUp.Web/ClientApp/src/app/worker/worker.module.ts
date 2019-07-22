import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkerRoutingModule } from './worker-routing.module';
import { WorkerHomeComponent } from './worker-home/worker-home.component';
import { TranslateModule } from '@ngx-translate/core';
import { WorkerService } from './worker.service';
import { WorkerTasksListComponent } from './worker-tasks-list/worker-tasks-list.component';

@NgModule({
  declarations: [WorkerHomeComponent, WorkerTasksListComponent],
  imports: [
    CommonModule,
    WorkerRoutingModule,
    TranslateModule
  ],
  providers: [WorkerService]
})
export class WorkerModule { }
