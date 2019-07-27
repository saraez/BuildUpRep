import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { WorkersService } from 'src/app/services/workers.service';
import { User } from 'src/app/models/user.model';
import { MemberType } from 'src/app/models/member-type.enum';
import { Person } from 'src/app/models/person.model';

@Component({
  selector: 'bld-member-panel',
  templateUrl: './member-panel.component.html',
  styleUrls: ['./member-panel.component.scss']
})
export class MemberPanelComponent implements OnInit {

  constructor(public loginService: LoginService, private _ws: WorkersService) { 

  }

  member: Person;

  ngOnInit() {
    if(this.loginService.currentUser.memberType == MemberType.Worker) {
      this.member = this._ws.getWorkerByUserId(this.loginService.currentUser.id);
    }
  }

}
