import { Component, OnInit, Input } from '@angular/core';
import { IEthic } from 'src/app/core/models/IEthic';
import { IAuthority } from 'src/app/core/models/IAuthority';
import {
  AuthorityUtils,
  AuthorityStatus
} from 'src/app/core/utils/authority-utils';

@Component({
  selector: 'app-authority',
  templateUrl: './authority.component.html',
  styleUrls: ['./authority.component.scss']
})
export class AuthorityComponent implements OnInit {
  @Input() activeEthics: IEthic[];
  authorities: IAuthority[] = [];
  authorityStatus = AuthorityStatus;
  constructor() {}

  ngOnInit() {
    this.authorities = AuthorityUtils.getAuthorities();
  }

  click() {}
}
