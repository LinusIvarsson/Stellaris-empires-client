import { GovernmentService } from './../../../core/services/government.service';
import { IAuthority } from 'src/app/core/models/IAuthority';
import { IEthic } from './../../../core/models/IEthic';
import { CivicValidators } from './civic-validators';
import { CivicsUtils, CivicStatus } from './../../../core/utils/civics-utils';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ICivic } from 'src/app/core/models/ICivic';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-civics',
  templateUrl: './civics.component.html',
  styleUrls: ['./civics.component.scss']
})
export class CivicsComponent implements OnInit, OnDestroy {
  activeEthics: IEthic[] = [];
  activeAuthority: IAuthority;
  civicStatus = CivicStatus;
  availableCivics: ICivic[];
  activeCivics: ICivic[] = [];

  subscriptions: Subscription = new Subscription();

  constructor(private governmentService: GovernmentService) {}

  ngOnInit() {
    this.availableCivics = CivicsUtils.getStandardEthics();
    this.subscriptions.add(
      this.governmentService.activeEthics.subscribe(ethics => {
        this.activeEthics = ethics;
        this.validateCivics();
        this.sortAvailableCivics();
      })
    );

    this.subscriptions.add(
      this.governmentService.activeAuthority.subscribe(authority => {
        this.activeAuthority = authority;
        this.validateCivics();
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
    this.validateCivics();
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
      this.validateCivics();
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

  setStatus(valid: boolean, civic: ICivic) {
    if (!valid) {
      civic.status = CivicStatus.disabled;
      const activeIndex = this.activeCivics.findIndex(
        currentCivic => currentCivic.name === civic.name
      );
      if (activeIndex >= 0) {
        civic.status = CivicStatus.invalid;
      }
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
        case 'Agrarian Idyll': {
          this.setStatus(
            CivicValidators.agrarianIdyll(this.activeEthics, this.activeCivics),
            civic
          );
          break;
        }
        case 'Aristocratic Elite': {
          this.setStatus(
            CivicValidators.aristocraticElite(
              this.activeEthics,
              this.activeAuthority,
              this.activeCivics
            ),
            civic
          );
          break;
        }
        case 'Slaver Guilds': {
          this.setStatus(
            CivicValidators.slaversGuilds(this.activeEthics, this.activeCivics),
            civic
          );
          break;
        }
        case 'Beacon of Liberty': {
          this.setStatus(
            CivicValidators.beaconOfLiberty(
              this.activeAuthority,
              this.activeEthics
            ),
            civic
          );
          break;
        }
        case 'Citizen Service': {
          this.setStatus(
            CivicValidators.citizenService(
              this.activeAuthority,
              this.activeEthics
            ),
            civic
          );
          break;
        }
        case 'Corvée System': {
          this.setStatus(
            CivicValidators.corvéeSystem(this.activeEthics, this.activeCivics),
            civic
          );
          break;
        }
        case 'Cutthroat Politics': {
          this.setStatus(true, civic);
          break;
        }
        case 'Distinguished Admiralty': {
          this.setStatus(
            CivicValidators.distinguishedAdmiralty(this.activeEthics),
            civic
          );
          break;
        }
        case 'Efficient Bureaucracy': {
          this.setStatus(true, civic);
          break;
        }
        case 'Environmentalist': {
          this.setStatus(true, civic);
          break;
        }
        case 'Exalted Priesthood': {
          this.setStatus(
            CivicValidators.exaltedPriesthood(
              this.activeAuthority,
              this.activeEthics,
              this.activeCivics
            ),
            civic
          );
          break;
        }
        case 'Feudal Society': {
          this.setStatus(
            CivicValidators.feudalSociety(this.activeAuthority),
            civic
          );
          break;
        }
        case 'Free Haven': {
          this.setStatus(
            CivicValidators.freeHaven(this.activeEthics, this.activeCivics),
            civic
          );
          break;
        }
        case 'Functional Architecture': {
          this.setStatus(true, civic);
          break;
        }
        case 'Idealistic Foundation': {
          this.setStatus(
            CivicValidators.idealisticFoundation(this.activeEthics),
            civic
          );
          break;
        }
        case 'Imperial Cult': {
          this.setStatus(
            CivicValidators.imperialCult(
              this.activeAuthority,
              this.activeEthics
            ),
            civic
          );
          break;
        }
        case 'Inward Perfection': {
          this.setStatus(
            CivicValidators.inwardPerfection(this.activeEthics),
            civic
          );
          break;
        }
        case 'Meritocracy': {
          this.setStatus(
            CivicValidators.meritocracy(this.activeAuthority),
            civic
          );
          break;
        }
        case 'Mining Guilds': {
          this.setStatus(true, civic);
          break;
        }
        case 'Nationalistic Zeal': {
          this.setStatus(
            CivicValidators.nationalisticZeal(this.activeEthics),
            civic
          );
          break;
        }
        case 'Parliamentary System': {
          this.setStatus(
            CivicValidators.parliamentarySystem(this.activeAuthority),
            civic
          );
          break;
        }
        case 'Philosopher King': {
          this.setStatus(
            CivicValidators.philosopherKing(this.activeAuthority),
            civic
          );
          break;
        }
        case 'Police State': {
          this.setStatus(CivicValidators.policeState(this.activeEthics), civic);
          break;
        }
        case 'Shadow Council': {
          this.setStatus(
            CivicValidators.shadowCouncil(this.activeAuthority),
            civic
          );
          break;
        }
        case 'Technocracy': {
          this.setStatus(
            CivicValidators.technocracy(this.activeEthics, this.activeCivics),
            civic
          );
          break;
        }
        case 'Warrior Culture': {
          this.setStatus(
            CivicValidators.warriorCulture(this.activeEthics),
            civic
          );
          break;
        }
        case 'Fanatic Purifiers': {
          this.setStatus(
            CivicValidators.fanaticPurifiers(
              this.activeEthics,
              this.activeCivics
            ),
            civic
          );
          break;
        }
        case 'Mechanist': {
          this.setStatus(
            CivicValidators.mechanist(this.activeEthics, this.activeCivics),
            civic
          );
          break;
        }
        case 'Syncretic Evolution': {
          this.setStatus(
            CivicValidators.syncreticEvolution(this.activeCivics),
            civic
          );
          break;
        }
      }
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
