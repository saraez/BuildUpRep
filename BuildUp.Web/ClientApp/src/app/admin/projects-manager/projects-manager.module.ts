import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsManagerRoutingModule } from './projects-manager-routing.module';
import { ProjectSearchComponent } from './project-search/project-search.component';
import { ProjectSearchFormComponent } from './project-search-form/project-search-form.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { DataViewModule } from 'primeng/dataview';

@NgModule({
  declarations: [ProjectSearchComponent, ProjectSearchFormComponent, ProjectListComponent],
  imports: [
    CommonModule,
    ProjectsManagerRoutingModule,
    DataViewModule
  ]
})
export class ProjectsManagerModule { }
