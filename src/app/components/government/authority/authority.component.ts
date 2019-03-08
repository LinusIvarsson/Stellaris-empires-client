import { Component, OnInit, Input, DoCheck } from '@angular/core';
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
export class AuthorityComponent implements OnInit, DoCheck {
  @Input() activeEthics: IEthic[];
  authorities: IAuthority[] = [];
  authorityStatus = AuthorityStatus;
  activeEthicLength = 0;
  constructor() {}

  ngOnInit() {
    this.authorities = AuthorityUtils.getAuthorities();
    this.activeEthicLength = this.activeEthics.length;
  }

  ngDoCheck() {
    if (this.activeEthicLength !== this.activeEthics.length) {
      this.validateAuthorities();
    }
  }

  click() {}

  validateAuthorities() {
    for (let authority of this.authorities) {
      switch (authority.name) {
        case 'Democratic': {
          this.validateDemocratic(authority);
        }
      }
    }
  }

  validateDemocratic(authority: IAuthority) {
    const hasConflictingEthic = this.activeEthics.findIndex(
      auth =>
        auth.name === 'authoritarian' ||
        auth.name === 'fanatic authoritarian' ||
        auth.name === 'gestalt consciousness'
    );

    if (hasConflictingEthic > -1) {
      authority.status = AuthorityStatus.disabled;
    } else {
      authority.status = AuthorityStatus.available;
    }
  }
}
