import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../worker.service';
import { Router } from '@angular/router';
import { WorkState } from 'src/app/models/workers/work-state.enum';

@Component({
  selector: 'bld-worker-home',
  templateUrl: './worker-home.component.html',
  styleUrls: ['./worker-home.component.scss']
})
export class WorkerHomeComponent implements OnInit {
  workerWorkState: WorkState;
  workState = WorkState;

  constructor(private _workerService: WorkerService, private _router: Router) { }

  ngOnInit() {
    this.workerWorkState = this._workerService.workState;
  }

  startWorkDay() {

    this._workerService.startTheDay().subscribe(valid => {
      if (valid) {
        this._router.navigate(["/worker/tasks"]);
      }
    });

  }

}
