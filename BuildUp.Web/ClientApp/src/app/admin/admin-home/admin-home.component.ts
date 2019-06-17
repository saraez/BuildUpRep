import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bld-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
