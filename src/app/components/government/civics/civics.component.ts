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

  constructor(private governmentService: GovernmentService) {
    this.governmentService.activeEthics.subscribe(ethics => {
      this.activeEthics = ethics;
      this.validateCivics();
    });
    this.governmentService.activeAuthority.subscribe(authority => {
      this.activeAuthority = authority;
      this.validateCivics();
    });
  }

  ngOnInit() {
    this.availableCivics = CivicsUtils.getStandardEthics();
    this.validateCivics();
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
    for (const civic of this.availableCivics) {
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
