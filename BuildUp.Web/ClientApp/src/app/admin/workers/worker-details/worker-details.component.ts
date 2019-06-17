import { Component, OnInit, Inject } from '@angular/core';
import { Worker } from '../../../shared/models/worker.model';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/api';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'bld-worker-details',
  templateUrl: './worker-details.component.html',
  styleUrls: ['./worker-details.component.scss']
})
export class WorkerDetailsComponent implements OnInit {

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

    worker: Worker = this.config.data;

    workerForm: FormGroup = new FormGroup({
      firstName: new FormControl(this.worker.firstName),
      lastName: new FormControl(this.worker.lastName),
      nickName: new FormControl(this.worker.nickName),
      phoneNumber: new FormControl(this.worker.phone)
    });

    ngOnInit() {
        //
    }

    close() {
        this.ref.close(this.workerForm.value);
    }

  

}
