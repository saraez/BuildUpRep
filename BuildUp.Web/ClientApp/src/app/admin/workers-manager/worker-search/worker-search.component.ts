import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ViewContainerRef, ElementRef } from '@angular/core';
import { Worker } from "../../../shared/models/worker.model"
import { WorkersManagerService } from '../workers-manager.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'bld-worker-search',
  templateUrl: './worker-search.component.html',
  styleUrls: ['./worker-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkerSearchComponent implements OnInit {

  onFreeTextKeyUp(value: string) {
    this.workers = this._wms.getWorkers(value);
  }

  workers: Observable<Worker[]>;


  constructor(private _wms: WorkersManagerService) { }

  ngOnInit() {
    this.workers = this._wms.getWorkers();
  }

}
