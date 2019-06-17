import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bld-project-search',
  templateUrl: './project-search.component.html',
  styleUrls: ['./project-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
