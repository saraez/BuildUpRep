import { Component, OnInit, ChangeDetectionStrategy, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Worker } from "../../../shared/models/worker.model"
import { DialogService } from 'primeng/api';
import { WorkerDetailsComponent } from '../worker-details/worker-details.component';

@Component({
  selector: 'bld-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [DialogService]
})
export class WorkerListComponent implements OnInit {

  @Input()
  workers: Worker[];

  @Output()
  updateWorker: EventEmitter<Worker> = new EventEmitter();

  display: boolean = false;

  openDialog(worker?: Worker) {
    if(!worker) worker = new Worker();
    const ref = this.dialogService.open(WorkerDetailsComponent, {
      data: worker,
      header: worker.firstName + " " + worker.lastName,
    });

    ref.onClose.subscribe((worker: Worker) => {
      if (worker) {
        this.updateWorker.emit(worker);
      }
    });
  }


  constructor(public dialogService: DialogService) { }

  ngOnInit() {
  }

}