import { Component, OnInit, ChangeDetectionStrategy, Input, ViewEncapsulation } from '@angular/core';
import { Worker } from "../../../shared/models/worker.model"
import {DialogService} from 'primeng/api';
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

  display: boolean = false;

  openDialog(worker: Worker) {
    const ref = this.dialogService.open(WorkerDetailsComponent, {
      data: worker,
      header: worker.firstName+ " " + worker.lastName,
  });

    ref.onClose.subscribe((worker: Worker) => {
      if (worker) {
          // this.messageService.add({severity:'info', summary: 'Car Selected', detail:'Vin:' + car.vin});
      }
  });
  }


  constructor(public dialogService: DialogService) { }

  ngOnInit() {
  }

}