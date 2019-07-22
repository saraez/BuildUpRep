import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'bld-worker-search-form',
  templateUrl: './worker-search-form.component.html',
  styleUrls: ['./worker-search-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkerSearchFormComponent implements OnInit {

  @Output()
  freeTextKeyUp: EventEmitter<string> = new EventEmitter();

  freeTextSubject: Subject<string> = new Subject();

  onFreeTextKeyUp(value: string) {
    this.freeTextSubject.next(value);
    //this.freeTextKeyUp.emit(value);
  }

  constructor() { }

  ngOnInit() {
    this.freeTextSubject.pipe(distinctUntilChanged()).subscribe(value => {
      this.freeTextKeyUp.emit(value);
    })
  }

}
