import { GovernmentService } from './../../../core/services/government.service';
import { IAuthority } from 'src/app/core/models/IAuthority';
import { IEthic } from './../../../core/models/IEthic';
import { CivicValidators } from './civic-validators';
import { CivicsUtils, CivicStatus } from './../../../core/utils/civics-utils';
import { Component, OnInit } from '@angular/core';
import { ICivic } from 'src/app/core/models/ICivic';

@Component({
  selector: 'app-civics',
  templateUrl: './civics.component.html',
  styleUrls: ['./civics.component.scss']
})
export class CivicsComponent implements OnInit {
  activeEthics: IEthic[] = [];
  activeAuthority: IAuthority;
  civicStatus = CivicStatus;
  availableCivics: ICivic[];
  activeCivics: ICivic[] = [];

  constructor(private governmentService: GovernmentService) {
    this.governmentService.activeEthics.subscribe(ethics => {
      this.activeEthics = ethics;
      this.validateCivics();
      this.sortAvailableCivics();
    });
    this.governmentService.activeAuthority.subscribe(authority => {
      this.activeAuthority = authority;
      this.validateCivics();
      this.sortAvailableCivics();
    });
  }

  ngOnInit() {
    this.availableCivics = CivicsUtils.getStandardEthics();
    this.validateCivics();
  }

  deSelectCivic(civic: ICivic) {
    this.availableCivics.push(civic);
    this.activeCivics.splice(
      this.activeCivics.findIndex(
        currentCivic => currentCivic.name === civic.name
      ),
      1
    );
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
    }
  }

  sortAvailableCivics() {
    if (this.availableCivics) {
      this.availableCivics.sort((a, b) => {
        if (a.name === a.name) {
          return a.status < b.status ? -1 : a.status > b.status ? 1 : 0;
        } else {
          return a.name < b.name ? -1 : 1;
        }
      });
    }
  }

  setStatus(valid: boolean, civic: ICivic) {
    if (!valid) {
      civic.status = CivicStatus.disabled;
    } else {
      civic.status = CivicStatus.available;
    }
  }

  validateCivics() {
    if (!this.availableCivics) {
      return;
    }
    for (const civic of [...this.availableCivics, ...this.activeCivics]) {
      switch (civic.name) {
        case 'Agrian Idyll': {
          this.setStatus(
            CivicValidators.validateAgrarianIdyll(this.activeEthics),
            civic
          );
          break;
        }
        case 'Aristocratic Elite': {
          this.setStatus(
            CivicValidators.validateAristocraticElite(
              this.activeEthics,
              this.activeAuthority
            ),
            civic
          );
        }
      }
    }
  }
}
