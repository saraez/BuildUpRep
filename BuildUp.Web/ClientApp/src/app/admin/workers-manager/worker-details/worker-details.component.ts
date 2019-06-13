import { Component, OnInit, Inject } from '@angular/core';
import { Worker } from '../../../shared/models/worker.model';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/api';

@Component({
  selector: 'bld-worker-details',
  templateUrl: './worker-details.component.html',
  styleUrls: ['./worker-details.component.scss']
})
export class WorkerDetailsComponent implements OnInit {

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

    worker: Worker = this.config.data;

    ngOnInit() {
        //
    }

    close(worker: Worker) {
        this.ref.close(worker);
    }

  

}
