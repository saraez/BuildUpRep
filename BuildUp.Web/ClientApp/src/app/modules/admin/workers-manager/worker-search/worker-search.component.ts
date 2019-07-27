import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ViewContainerRef, ElementRef } from '@angular/core';
import { Worker } from "../../../../models/workers/worker.model"
import { WorkersService } from '../../../../services/workers.service';
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
    this.workers = this._ws.getWorkers(value);
    // .pipe(debounceTime(1000), distinctUntilChanged())
  }

  workers: Observable<Worker[]>;

  onUpdateWorker(worker: Worker) {
    this._ws.updateWorker(worker);
  }


  onAddWorker(worker: Worker) {
    this._ws.addWorker(worker);
  }


  constructor(private _ws: WorkersService) { }

  ngOnInit() {
    this.workers = this._ws.getWorkers();
  }

}
