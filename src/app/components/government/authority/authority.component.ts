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
      this.activeEthicLength = this.activeEthics.length;
      this.validateAuthorities();
    }
  }

  click() {}

  validateAuthorities() {
    for (const authority of this.authorities) {
      switch (authority.name) {
        case 'Democratic': {
          this.validateDemocratic(authority);
          break;
        }
        case 'Oligarchic': {
          this.validateOligarchic(authority);
          break;
        }
        case 'Dictatorial': {
          this.validateDictatorial(authority);
          break;
        }
        case 'Imperial': {
          this.validateImperial(authority);
          break;
        }
        case 'Hive Mind': {
          this.validateHiveMind(authority);
          break;
        }
        case 'Machine Intelligence': {
          this.validateMachineIntelligence(authority);
          break;
        }
        case 'Corporate': {
          this.validateCorporate(authority);
          break;
        }
      }
    }
  }

  setStatus(index: number, authority: IAuthority) {
    if (index > -1) {
      authority.status = AuthorityStatus.disabled;
    } else {
      authority.status = AuthorityStatus.available;
    }
  }

  validateDemocratic(authority: IAuthority) {
    const hasConflictingEthic = this.activeEthics.findIndex(
      auth =>
        auth.name === 'authoritarian' ||
        auth.name === 'fanatic_authoritarian' ||
        auth.name === 'gestalt_consciousness'
    );

    this.setStatus(hasConflictingEthic, authority);
  }

  validateOligarchic(authority: IAuthority) {
    const hasConflictingEthic = this.activeEthics.findIndex(
      auth =>
        auth.name === 'fanatic_eqalitarian' ||
        auth.name === 'fanatic_authoritarian' ||
        auth.name === 'gestalt_consciousness'
    );

    this.setStatus(hasConflictingEthic, authority);
  }

  validateDictatorial(authority: IAuthority) {
    const hasConflictingEthic = this.activeEthics.findIndex(
      auth =>
        auth.name === 'eqalitarian' ||
        auth.name === 'fanatic_eqalitarian' ||
        auth.name === 'gestalt_consciousness'
    );

    this.setStatus(hasConflictingEthic, authority);
  }

  validateImperial(authority: IAuthority) {
    const hasConflictingEthic = this.activeEthics.findIndex(
      auth =>
        auth.name === 'eqalitarian' ||
        auth.name === 'fanatic_eqalitarian' ||
        auth.name === 'gestalt_consciousness'
    );

    this.setStatus(hasConflictingEthic, authority);
  }

  validateCorporate(authority: IAuthority) {
    const hasConflictingEthic = this.activeEthics.findIndex(
      auth =>
        auth.name === 'fanatic_authoritarian' ||
        auth.name === 'fanatic_eqalitarian' ||
        auth.name === 'gestalt_consciousness'
    );

    this.setStatus(hasConflictingEthic, authority);
  }

  validateHiveMind(authority: IAuthority) {
    const hasGestaltConsciousness = this.activeEthics.findIndex(
      auth => auth.name === 'gestalt_consciousness'
    );

    if (hasGestaltConsciousness > -1 || this.activeEthicLength === 0) {
      authority.status = AuthorityStatus.available;
    } else {
      authority.status = AuthorityStatus.disabled;
    }
  }

  validateMachineIntelligence(authority: IAuthority) {
    const hasGestaltConsciousness = this.activeEthics.findIndex(
      auth => auth.name === 'gestalt_consciousness'
    );

    if (hasGestaltConsciousness > -1 || this.activeEthicLength === 0) {
      authority.status = AuthorityStatus.available;
    } else {
      authority.status = AuthorityStatus.disabled;
    }
  }
}
