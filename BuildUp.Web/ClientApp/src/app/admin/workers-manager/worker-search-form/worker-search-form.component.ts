import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'bld-worker-search-form',
  templateUrl: './worker-search-form.component.html',
  styleUrls: ['./worker-search-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkerSearchFormComponent implements OnInit {

  @Output()
  freeTextKeyUp: EventEmitter<string> = new EventEmitter();

  onFreeTextKeyUp(value: string) {
    this.freeTextKeyUp.emit(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
