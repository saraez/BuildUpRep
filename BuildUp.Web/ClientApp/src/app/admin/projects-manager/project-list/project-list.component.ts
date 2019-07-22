import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Project } from '../../../models/project.model';

@Component({
  selector: 'bld-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectListComponent implements OnInit {

  @Input()
  projects: Project;

  constructor() { }

  ngOnInit() {
  }

}
