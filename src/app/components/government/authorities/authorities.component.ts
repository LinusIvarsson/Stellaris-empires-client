import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { IEthic } from 'src/app/core/models/IEthic';
import { IAuthority } from 'src/app/core/models/IAuthority';
import {
  AuthorityUtils,
  AuthorityStatus
} from 'src/app/core/utils/authority-utils';

@Component({
  selector: 'app-authorities',
  templateUrl: './authorities.component.html',
  styleUrls: ['./authorities.component.scss']
})
export class AuthoritiesComponent implements OnInit, DoCheck {
  @Input() activeEthics: IEthic[];
  activeAuthority: IAuthority;
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
      if (
        this.activeAuthority &&
        this.activeAuthority.status === AuthorityStatus.disabled
      ) {
        this.activeAuthority = undefined;
      }
    }
  }

  click(authority: IAuthority) {
    if (authority.status === AuthorityStatus.disabled) {
      return;
    }

    if (this.activeAuthority && authority.name === this.activeAuthority.name) {
      authority.status = AuthorityStatus.available;
      this.activeAuthority = undefined;
    } else {
      this.activeAuthority
        ? (this.activeAuthority.status = AuthorityStatus.available)
        : (this.activeAuthority = undefined);
      this.activeAuthority = authority;
      authority.status = AuthorityStatus.active;
    }
  }

  validateAuthorities() {
    for (const authority of this.authorities) {
      switch (authority.name) {
        case 'Democratic': {
          this.setStatus(this.validateDemocratic(), authority);
          break;
        }
        case 'Oligarchic': {
          this.setStatus(this.validateOligarchic(), authority);
          break;
        }
        case 'Dictatorial': {
          this.setStatus(this.validateDictatorial(), authority);
          break;
        }
        case 'Imperial': {
          this.setStatus(this.validateImperial(), authority);
          break;
        }
        case 'Corporate': {
          this.setStatus(this.validateCorporate(), authority);
          break;
        }
        case 'Hive Mind': {
          this.setStatus(this.validateHiveMind(), authority);
          break;
        }
        case 'Machine Intelligence': {
          this.setStatus(this.validateMachineIntelligence(), authority);
          break;
        }
      }
    }
  }

  setStatus(valid: boolean, authority: IAuthority) {
    if (!valid) {
      authority.status = AuthorityStatus.disabled;
    } else if (
      this.activeAuthority &&
      this.activeAuthority.name === authority.name
    ) {
      this.activeAuthority.status = AuthorityStatus.active;
    } else {
      authority.status = AuthorityStatus.available;
    }
  }

  validateDemocratic() {
    const hasConflictingEthic = this.activeEthics.findIndex(
      auth =>
        auth.name === 'authoritarian' ||
        auth.name === 'fanatic_authoritarian' ||
        auth.name === 'gestalt_consciousness'
    );

    return !!hasConflictingEthic;
  }

  validateOligarchic() {
    const hasConflictingEthic = this.activeEthics.findIndex(
      auth =>
        auth.name === 'fanatic_eqalitarian' ||
        auth.name === 'fanatic_authoritarian' ||
        auth.name === 'gestalt_consciousness'
    );

    return !!hasConflictingEthic;
  }

  validateDictatorial() {
    const hasConflictingEthic = this.activeEthics.findIndex(
      auth =>
        auth.name === 'eqalitarian' ||
        auth.name === 'fanatic_eqalitarian' ||
        auth.name === 'gestalt_consciousness'
    );

    return !!hasConflictingEthic;
  }

  validateImperial() {
    const hasConflictingEthic = this.activeEthics.findIndex(
      auth =>
        auth.name === 'eqalitarian' ||
        auth.name === 'fanatic_eqalitarian' ||
        auth.name === 'gestalt_consciousness'
    );

    return !!hasConflictingEthic;
  }

  validateCorporate() {
    const hasConflictingEthic = this.activeEthics.findIndex(
      auth =>
        auth.name === 'fanatic_authoritarian' ||
        auth.name === 'fanatic_eqalitarian' ||
        auth.name === 'gestalt_consciousness'
    );

    return !!hasConflictingEthic;
  }

  validateHiveMind() {
    const hasGestaltConsciousness = this.activeEthics.findIndex(
      auth => auth.name === 'gestalt_consciousness'
    );

    if (hasGestaltConsciousness > -1) {
      return true;
    } else {
      return false;
    }
  }

  validateMachineIntelligence() {
    const hasGestaltConsciousness = this.activeEthics.findIndex(
      auth => auth.name === 'gestalt_consciousness'
    );

    if (hasGestaltConsciousness > -1) {
      return true;
    } else {
      return false;
    }
  }
}
