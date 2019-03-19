import { GovernmentService } from './../../../core/services/government.service';
import { IAuthority } from 'src/app/core/models/IAuthority';
import { IEthic } from './../../../core/models/IEthic';
import { CivicValidators } from './validators/civic-validators';
import { CivicsUtils, CivicStatus } from './../../../core/utils/civics-utils';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ICivic } from 'src/app/core/models/ICivic';
import { Subscription } from 'rxjs';
import { AuthorityType } from 'src/app/core/utils/authorities-utils';

@Component({
  selector: 'app-civics',
  templateUrl: './civics.component.html',
  styleUrls: ['./civics.component.scss']
})
export class CivicsComponent implements OnInit, OnDestroy {
  civicStatus = CivicStatus;
  authorityTypes = AuthorityType;
  activeEthics: IEthic[] = [];
  activeAuthority: IAuthority;
  availableCivics: ICivic[];
  activeCivics: ICivic[] = [];
  subscriptions: Subscription = new Subscription();
  civicValidators: CivicValidators = new CivicValidators();

  constructor(private governmentService: GovernmentService) {}

  ngOnInit() {
    this.setCivics();
    this.subscriptions.add(
      this.governmentService.activeAuthority.subscribe(authority => {
        this.activeAuthority = authority;
        this.setCivics();
        this.validate();
        this.sortAvailableCivics();
      })
    );
    this.subscriptions.add(
      this.governmentService.activeEthics.subscribe(ethics => {
        this.activeEthics = ethics;
        this.setCivics();
        this.validate();
        this.sortAvailableCivics();
      })
    );
  }

  deSelectCivic(civic: ICivic) {
    this.availableCivics.push(civic);
    this.activeCivics.splice(
      this.activeCivics.findIndex(
        currentCivic => currentCivic.name === civic.name
      ),
      1
    );
    this.validate();
    this.sortAvailableCivics();
  }

  civicClicked(civic: ICivic) {
    if (civic.status === CivicStatus.disabled) {
      return;
    }

    if (civic.status === CivicStatus.available) {
      this.activeCivics.push(civic);
      this.availableCivics.splice(
        this.availableCivics.findIndex(
          currentCivic => currentCivic.name === civic.name
        ),
        1
      );
      this.validate();
      this.sortAvailableCivics();
    }
  }

  sortAvailableCivics() {
    if (this.availableCivics) {
      this.availableCivics.sort((a, b) => {
        if (a.status === b.status) {
          return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
        } else {
          return a.status < b.status ? -1 : 1;
        }
      });
    }
  }

  setCivics() {
    if (!this.activeAuthority) {
      this.availableCivics = CivicsUtils.getStandardCivics();
      this.filterActiveCivicsFromAvailable();
      return;
    }

    if (this.activeAuthority.type === AuthorityType.corporate) {
      this.availableCivics = CivicsUtils.getCorporateCivics();
      this.filterActiveCivicsFromAvailable();
      return;
    }

    if (this.activeAuthority.type === AuthorityType.standard) {
      this.availableCivics = CivicsUtils.getStandardCivics();
      this.filterActiveCivicsFromAvailable();
      return;
    }
  }

  filterActiveCivicsFromAvailable() {
    for (const civic of this.activeCivics) {
      const matchingCivicIndex = this.availableCivics.findIndex(
        availableCivic => availableCivic.name === civic.name
      );
      this.availableCivics.splice(matchingCivicIndex, 1);
    }
  }
  validate() {
    this.civicValidators.validateCivics(
      this.activeEthics,
      this.activeCivics,
      this.availableCivics,
      this.activeAuthority
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
