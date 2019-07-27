import { Component, OnInit, ChangeDetectionStrategy, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Worker } from "../../../../models/workers/worker.model"
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
  addWorker: EventEmitter<Worker> = new EventEmitter();

  @Output()
  updateWorker: EventEmitter<Worker> = new EventEmitter();

  openDialog(worker?: Worker) {
    let isNew: boolean = false;
    if (!worker) {
      worker = new Worker();
      isNew = true;
    }
    const ref = this.dialogService.open(WorkerDetailsComponent, {
      data: worker,
      header: isNew ? "הוספת פועל חדש" : worker.firstName + " " + worker.lastName,
    });

    ref.onClose.subscribe((worker: Worker) => {
      if (!worker) return;
      if (worker.id > 0) {
        this.updateWorker.emit(worker);
      }
      else {
        this.addWorker.emit(worker);
      }
    });
  }


  constructor(public dialogService: DialogService) { }

  ngOnInit() {
  }

}