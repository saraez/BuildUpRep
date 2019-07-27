import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bld-project-search-form',
  templateUrl: './project-search-form.component.html',
  styleUrls: ['./project-search-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectSearchFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
