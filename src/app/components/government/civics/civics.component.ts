import { IEthic } from './../../../core/models/IEthic';
import { CivicValidators } from './civic-validators';
import { CivicsUtils, CivicStatus } from './../../../core/utils/civics-utils';
import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { ICivic } from 'src/app/core/models/ICivic';

@Component({
  selector: 'app-civics',
  templateUrl: './civics.component.html',
  styleUrls: ['./civics.component.scss']
})
export class CivicsComponent implements OnInit, DoCheck {
  @Input() activeEthics: IEthic[] = [];
  activeEthicLength = 0;
  civicStatus = CivicStatus;
  availableCivics: ICivic[];
  constructor() {}

  ngOnInit() {
    this.availableCivics = CivicsUtils.getStandardEthics();
    this.validateCivics();
  }

  ngDoCheck() {
    if (this.activeEthicLength !== this.activeEthics.length) {
      this.activeEthicLength = this.activeEthics.length;
      this.validateCivics();
      //   if (
      //     this.activeAuthority &&
      //     this.activeAuthority.status === AuthorityStatus.disabled
      //   ) {
      //     this.activeAuthority = undefined;
      //   }
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
    for (const civic of this.availableCivics) {
      switch (civic.name) {
        case 'Agrian Idyll': {
          this.setStatus(
            CivicValidators.validateAgrarianIdyll(this.activeEthics),
            civic
          );
          break;
        }
      }
    }
  }
}
