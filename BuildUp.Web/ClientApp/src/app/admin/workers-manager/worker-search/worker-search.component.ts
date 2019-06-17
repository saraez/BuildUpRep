import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ViewContainerRef, ElementRef } from '@angular/core';
import { Worker } from "../../../shared/models/worker.model"
import { WorkersManagerService } from '../workers-manager.service';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged } from "rxjs/operators"

@Component({
  selector: 'bld-worker-search',
  templateUrl: './worker-search.component.html',
  styleUrls: ['./worker-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkerSearchComponent implements OnInit {

  onFreeTextKeyUp(value: string) {
    this.workers = this._wms.getWorkers(value);
    // .pipe(debounceTime(1000), distinctUntilChanged())
  }

  workers: Observable<Worker[]>;

  onUpdateWorker(worker: Worker) {
    this._wms.setWorker(worker);
  }


  constructor(private _wms: WorkersManagerService) { }

  ngOnInit() {
    this.workers = this._wms.getWorkers();
  }

}
