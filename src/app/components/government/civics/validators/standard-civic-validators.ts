import { IEthic } from 'src/app/core/models/IEthic';
import { ICivic } from 'src/app/core/models/ICivic';
import { IAuthority } from 'src/app/core/models/IAuthority';
import { CivicStatus } from 'src/app/core/utils/civics-utils';

export class StandardCivicValidators {
  validateStandardCivics(
    activeEthics: IEthic[],
    activeCivics: ICivic[],
    availableCivics: ICivic[],
    activeAuthority: IAuthority
  ) {
    for (const civic of [...availableCivics, ...activeCivics]) {
      switch (civic.name) {
        case 'Agrarian Idyll': {
          this.setStatus(
            this.agrarianIdyll(activeEthics, activeCivics),
            civic,
            activeCivics
          );
          break;
        }
        case 'Aristocratic Elite': {
          this.setStatus(
            this.aristocraticElite(activeEthics, activeAuthority, activeCivics),
            civic,
            activeCivics
          );
          break;
        }
        case 'Slaver Guilds': {
          this.setStatus(
            this.slaversGuilds(activeEthics, activeCivics),
            civic,
            activeCivics
          );
          break;
        }
        case 'Beacon of Liberty': {
          this.setStatus(
            this.beaconOfLiberty(activeAuthority, activeEthics),
            civic,
            activeCivics
          );
          break;
        }
        case 'Citizen Service': {
          this.setStatus(
            this.citizenService(activeAuthority, activeEthics),
            civic,
            activeCivics
          );
          break;
        }
        case 'Corvée System': {
          this.setStatus(
            this.corvéeSystem(activeEthics, activeCivics),
            civic,
            activeCivics
          );
          break;
        }
        case 'Cutthroat Politics': {
          this.setStatus(true, civic, activeCivics);
          break;
        }
        case 'Distinguished Admiralty': {
          this.setStatus(
            this.distinguishedAdmiralty(activeEthics),
            civic,
            activeCivics
          );
          break;
        }
        case 'Efficient Bureaucracy': {
          this.setStatus(true, civic, activeCivics);
          break;
        }
        case 'Environmentalist': {
          this.setStatus(true, civic, activeCivics);
          break;
        }
        case 'Exalted Priesthood': {
          this.setStatus(
            this.exaltedPriesthood(activeAuthority, activeEthics, activeCivics),
            civic,
            activeCivics
          );
          break;
        }
        case 'Feudal Society': {
          this.setStatus(
            this.feudalSociety(activeAuthority),
            civic,
            activeCivics
          );
          break;
        }
        case 'Free Haven': {
          this.setStatus(
            this.freeHaven(activeEthics, activeCivics),
            civic,
            activeCivics
          );
          break;
        }
        case 'Functional Architecture': {
          this.setStatus(true, civic, activeCivics);
          break;
        }
        case 'Idealistic Foundation': {
          this.setStatus(
            this.idealisticFoundation(activeEthics),
            civic,
            activeCivics
          );
          break;
        }
        case 'Imperial Cult': {
          this.setStatus(
            this.imperialCult(activeAuthority, activeEthics),
            civic,
            activeCivics
          );
          break;
        }
        case 'Inward Perfection': {
          this.setStatus(
            this.inwardPerfection(activeEthics),
            civic,
            activeCivics
          );
          break;
        }
        case 'Meritocracy': {
          this.setStatus(
            this.meritocracy(activeAuthority),
            civic,
            activeCivics
          );
          break;
        }
        case 'Mining Guilds': {
          this.setStatus(true, civic, activeCivics);
          break;
        }
        case 'Nationalistic Zeal': {
          this.setStatus(
            this.nationalisticZeal(activeEthics),
            civic,
            activeCivics
          );
          break;
        }
        case 'Parliamentary System': {
          this.setStatus(
            this.parliamentarySystem(activeAuthority),
            civic,
            activeCivics
          );
          break;
        }
        case 'Philosopher King': {
          this.setStatus(
            this.philosopherKing(activeAuthority),
            civic,
            activeCivics
          );
          break;
        }
        case 'Police State': {
          this.setStatus(this.policeState(activeEthics), civic, activeCivics);
          break;
        }
        case 'Shadow Council': {
          this.setStatus(
            this.shadowCouncil(activeAuthority),
            civic,
            activeCivics
          );
          break;
        }
        case 'Technocracy': {
          this.setStatus(
            this.technocracy(activeEthics, activeCivics),
            civic,
            activeCivics
          );
          break;
        }
        case 'Warrior Culture': {
          this.setStatus(
            this.warriorCulture(activeEthics),
            civic,
            activeCivics
          );
          break;
        }
        case 'Fanatic Purifiers': {
          this.setStatus(
            this.fanaticPurifiers(activeEthics, activeCivics),
            civic,
            activeCivics
          );
          break;
        }
        case 'Mechanist': {
          this.setStatus(
            this.mechanist(activeEthics, activeCivics),
            civic,
            activeCivics
          );
          break;
        }
        case 'Syncretic Evolution': {
          this.setStatus(
            this.syncreticEvolution(activeCivics),
            civic,
            activeCivics
          );
          break;
        }
        case 'Life-Seeded': {
          this.setStatus(this.lifeSeeded(activeCivics), civic, activeCivics);
          break;
        }
        case 'Post-Apocalyptic': {
          this.setStatus(
            this.postApocalyptic(activeCivics),
            civic,
            activeCivics
          );
          break;
        }
        case 'Barbaric Despoilers': {
          this.setStatus(
            this.barbaricDespoilers(activeEthics, activeCivics),
            civic,
            activeCivics
          );
          break;
        }
        case 'Byzantine Bureaucracy': {
          this.setStatus(
            this.byzantineBureaucray(activeCivics),
            civic,
            activeCivics
          );
          break;
        }
        case 'Merchant Guilds': {
          this.setStatus(
            this.merchantGuilds(activeCivics),
            civic,
            activeCivics
          );
          break;
        }
        case 'Shared Burdens': {
          this.setStatus(
            this.sharedBurdens(activeEthics, activeCivics),
            civic,
            activeCivics
          );
          break;
        }
        default: {
          civic.status = CivicStatus.disabled;
        }
      }
    }
  }

  private setStatus(valid: boolean, civic: ICivic, activeCivics: ICivic[]) {
    if (!valid) {
      civic.status = CivicStatus.disabled;
      const activeIndex = activeCivics.findIndex(
        currentCivic => currentCivic.name === civic.name
      );
      if (activeIndex >= 0) {
        civic.status = CivicStatus.invalid;
      }
    } else {
      civic.status = CivicStatus.available;
    }
  }

  private agrarianIdyll(activeEthics: IEthic[], activeCivics: ICivic[]) {
    const hasRequiredEthic = !!activeEthics.find(
      ethic => ethic.name === 'pacifist' || ethic.name === 'fanatic_pacifist'
    );
    const hasConflictingEthic = !!activeCivics.find(
      civic =>
        civic.name === 'Syncretic Evolution' ||
        civic.name === 'Slaver Guilds' ||
        civic.name === 'Post-Apocalyptic'
    );

    return hasRequiredEthic && !hasConflictingEthic;
  }

  private aristocraticElite(
    activeEthics: IEthic[],
    activeAuthority: IAuthority,
    activeCivics: ICivic[]
  ) {
    if (!activeAuthority) {
      return false;
    }
    const hasRequiredAuthority =
      activeAuthority.name === 'Imperial' ||
      activeAuthority.name === 'Oligarchic';
    const hasConflictingEthic = !!activeEthics.find(
      ethic =>
        ethic.name === 'eqalitarian' || ethic.name === 'fanatic_eqalitarian'
    );
    const hasConflictingCivics = !!activeCivics.find(
      civic =>
        civic.name === 'Exalted Priesthood' ||
        civic.name === 'Merchant Guilds' ||
        civic.name === 'Technocracy' ||
        civic.name === 'Byzantine Bureaucracy'
    );

    return !!(
      hasRequiredAuthority &&
      !hasConflictingEthic &&
      !hasConflictingCivics
    );
  }

  private beaconOfLiberty(activeAuthority: IAuthority, activeEthics: IEthic[]) {
    if (!activeAuthority) {
      return false;
    }

    const hasRequiredAuthority = activeAuthority.name === 'Democratic';
    const hasRequiredEthic = !!activeEthics.find(
      ethic =>
        ethic.name === 'eqalitarian' || ethic.name === 'fanatic_eqalitarian'
    );
    const hasConflictingEthic = !!activeEthics.find(
      ethic => ethic.name === 'xenophobe' || ethic.name === 'fanatic_xenophobe'
    );

    return hasRequiredAuthority && hasRequiredEthic && !hasConflictingEthic;
  }

  private slaversGuilds(activeEthics: IEthic[], activeCivics: ICivic[]) {
    const hasRequiredEthic = !!activeEthics.find(
      ethic =>
        ethic.name === 'authoritarian' || ethic.name === 'fanatic_authoritarian'
    );
    const hasConflictingCivics = activeCivics.find(
      civic => civic.name === 'Syncretic Evolution'
    );

    return hasRequiredEthic && !hasConflictingCivics;
  }

  private citizenService(activeAuthority: IAuthority, activeEthics: IEthic[]) {
    if (!activeAuthority) {
      return false;
    }

    const hasRequiredAuthority =
      activeAuthority.name === 'Democratic' ||
      activeAuthority.name === 'Oligarchic';
    const hasRequiredEthic = !!activeEthics.find(
      ethic =>
        ethic.name === 'militarist' || ethic.name === 'fanatic_militarist'
    );
    const hasConflictingEthic = !!activeEthics.find(
      ethic => ethic.name === 'fanatic_xenophile'
    );

    return hasRequiredAuthority && hasRequiredEthic && !hasConflictingEthic;
  }

  private corvéeSystem(activeEthics: IEthic[], activeCivics: ICivic[]) {
    const hasConflictingEthic = !!activeEthics.find(
      ethic =>
        ethic.name === 'eqalitarian' || ethic.name === 'fanatic_eqalitarian'
    );

    const hasConflictingCivic = !!activeCivics.find(
      civic => civic.name === 'Free Haven'
    );

    return !hasConflictingEthic && !hasConflictingCivic;
  }

  private distinguishedAdmiralty(activeEthics: IEthic[]) {
    const hasRequiredEthic = !!activeEthics.find(
      ethic =>
        ethic.name === 'militarist' || ethic.name === 'fanatic_militarist'
    );

    return hasRequiredEthic;
  }

  private exaltedPriesthood(
    activeAuthority: IAuthority,
    activeEthics: IEthic[],
    activeCivics: ICivic[]
  ) {
    if (!activeAuthority) {
      return false;
    }
    const hasRequiredAuthority =
      activeAuthority.name === 'Oligarchic' ||
      activeAuthority.name === 'Dictatorial';
    const hasRequiredEthic = !!activeEthics.find(
      ethic =>
        ethic.name === 'spiritualist' || ethic.name === 'fanatic_spiritualist'
    );
    const hasConflictingCivics = !!activeCivics.find(
      civic =>
        civic.name === 'Merchant' ||
        civic.name === 'Aristocratic' ||
        civic.name === 'Technocracy' ||
        civic.name === 'Byzantine Bureaucracy'
    );

    return hasRequiredAuthority && hasRequiredEthic && !hasConflictingCivics;
  }

  private feudalSociety(activeAuthority: IAuthority) {
    if (!activeAuthority) {
      return false;
    }

    const hasRequiredAuthority = activeAuthority.name === 'Imperial';

    return hasRequiredAuthority;
  }

  private freeHaven(activeEthics: IEthic[], activeCivics: ICivic[]) {
    const hasRequiredEthic = !!activeEthics.find(
      ethic => ethic.name === 'xenophile' || ethic.name === 'fanatic_xenophile'
    );
    const hasConflictingCivic = !!activeCivics.find(
      civic => civic.name === 'Corvée System'
    );

    return hasRequiredEthic && !hasConflictingCivic;
  }

  private idealisticFoundation(activeEthics: IEthic[]) {
    const hasRequiredEthic = !!activeEthics.find(
      ethic =>
        ethic.name === 'eqalitarian' || ethic.name === 'fanatic_eqalitarian'
    );

    return hasRequiredEthic;
  }

  private imperialCult(activeAuthority: IAuthority, activeEthics: IEthic[]) {
    if (!activeAuthority) {
      return false;
    }

    const hasRequiredAuthority = activeAuthority.name === 'Imperial';

    const hasRequiredEthic = !!activeEthics.find(
      ethic =>
        ethic.name === 'authoritarian' || ethic.name === 'fanatic_authoritarian'
    );
    const hasRequiredEthic2 = !!activeEthics.find(
      ethic =>
        ethic.name === 'spiritualist' || ethic.name === 'fanatic_spiritualist'
    );

    return hasRequiredAuthority && hasRequiredEthic && hasRequiredEthic2;
  }

  private inwardPerfection(activeEthics: IEthic[]) {
    const hasRequiredEthic = !!activeEthics.find(
      ethic => ethic.name === 'pacifist' || ethic.name === 'fanatic_pacifist'
    );
    const hasRequiredEthic2 = !!activeEthics.find(
      ethic => ethic.name === 'xenophobe' || ethic.name === 'fanatic_xenophobe'
    );

    return hasRequiredEthic && hasRequiredEthic2;
  }

  private meritocracy(activeAuthority: IAuthority) {
    if (!activeAuthority) {
      return true;
    }

    const hasConflictingAuthority =
      activeAuthority.name === 'Dictatorial' ||
      activeAuthority.name === 'Imperial';

    return !hasConflictingAuthority;
  }

  private nationalisticZeal(activeEthics: IEthic[]) {
    const hasRequiredEthic = !!activeEthics.find(
      ethic =>
        ethic.name === 'militarist' || ethic.name === 'fanatic_militarist'
    );

    return hasRequiredEthic;
  }

  private parliamentarySystem(activeAuthority: IAuthority) {
    if (!activeAuthority) {
      return false;
    }
    const hasRequiredAuthority = activeAuthority.name === 'Democratic';

    return hasRequiredAuthority;
  }

  private philosopherKing(activeAuthority: IAuthority) {
    if (!activeAuthority) {
      return false;
    }
    const hasRequiredAuthority =
      activeAuthority.name === 'Dictatorial' ||
      activeAuthority.name === 'Imperial';

    return hasRequiredAuthority;
  }

  private policeState(activeEthics: IEthic[]) {
    const hasConflictingEthic = !!activeEthics.find(
      ethic => ethic.name === 'fanatic_eqalitarian'
    );

    return !hasConflictingEthic;
  }

  private shadowCouncil(activeAuthority: IAuthority) {
    if (!activeAuthority) {
      return true;
    }
    const hasConflictedAuthority = activeAuthority.name === 'Imperial';

    return !hasConflictedAuthority;
  }

  private technocracy(activeEthics: IEthic[], activeCivics: ICivic[]) {
    const hasRequiredEthic = !!activeEthics.find(
      ethic =>
        ethic.name === 'materialist' || ethic.name === 'fanatic_materialist'
    );
    const hasConflictingCivic = !!activeCivics.find(
      civic => civic.name === 'Shared Burdens'
    );

    return hasRequiredEthic && !hasConflictingCivic;
  }

  private warriorCulture(activeEthics: IEthic[]) {
    const hasRequiredEthic = !!activeEthics.find(
      ethic =>
        ethic.name === 'militarist' || ethic.name === 'fanatic_militarist'
    );

    return hasRequiredEthic;
  }

  private fanaticPurifiers(activeEthics: IEthic[], activeCivics: ICivic[]) {
    const hasRequiredEthic = !!activeEthics.find(
      ethic => ethic.name === 'fanatic_xenophobe'
    );
    const hasRequiredEthic2 = !!activeEthics.find(
      ethic => ethic.name === 'militarist' || ethic.name === 'spiritualist'
    );
    const hasConflictingCivic = !!activeCivics.find(
      civic =>
        civic.name === 'Mechanist' ||
        civic.name === 'Syncretic Evolution' ||
        civic.name === 'Barbaric Despoilers'
    );

    return hasRequiredEthic && hasRequiredEthic2 && !hasConflictingCivic;
  }

  private mechanist(activeEthics: IEthic[], activeCivics: ICivic[]) {
    const hasRequiredEthic = !!activeEthics.find(
      ethic =>
        ethic.name === 'materialist' || ethic.name === 'fanatic_materialist'
    );

    const hasConflictingCivics = !!activeCivics.find(
      civic =>
        civic.name === 'Syncretic Evolution' ||
        civic.name === 'Life-Seeded' ||
        civic.name === 'Post-Apocalyptic'
    );

    return hasRequiredEthic && !hasConflictingCivics;
  }

  private syncreticEvolution(activeCivics: ICivic[]) {
    const hasConflictingCivic = !!activeCivics.find(
      civic =>
        civic.name === 'Mechanist' ||
        civic.name === 'Fanatic Purifiers' ||
        civic.name === 'Agrarian Idyll' ||
        civic.name === 'Life-Seeded' ||
        civic.name === 'Post-Apocalyptic'
    );
    return !hasConflictingCivic;
  }

  private lifeSeeded(activeCivics: ICivic[]) {
    const hasConflictingCivic = !!activeCivics.find(
      civic =>
        civic.name === 'Mechanist' ||
        civic.name === 'Syncretic Evolution' ||
        civic.name === 'Post-Apocalyptic'
    );
    return !hasConflictingCivic;
  }

  private postApocalyptic(activeCivics: ICivic[]) {
    const hasConflictingCivic = !!activeCivics.find(
      civic =>
        civic.name === 'Mechanist' ||
        civic.name === 'Agrarian Idyll' ||
        civic.name === 'Syncretic Evolution' ||
        civic.name === 'Life-Seeded'
    );
    return !hasConflictingCivic;
  }

  private barbaricDespoilers(activeEthics: IEthic[], activeCivics: ICivic[]) {
    const hasRequiredEthic = !!activeEthics.find(
      ethic =>
        ethic.name === 'militarist' || ethic.name === 'fanatic_militarist'
    );
    const hasRequiredEthic2 = !!activeEthics.find(
      ethic =>
        ethic.name === 'authoritarian' ||
        ethic.name === 'fanatic_authoritarian' ||
        ethic.name === 'xenophobe' ||
        ethic.name === 'fanatic_xenophobe'
    );
    const hasConflictingEthic = !!activeEthics.find(
      ethic => ethic.name === 'xenophile' || ethic.name === 'fanatic_xenophile'
    );
    const hasConflictingCivic = !!activeCivics.find(
      civic => civic.name === 'Fanatic Purifiers'
    );

    return (
      hasRequiredEthic &&
      hasRequiredEthic2 &&
      !hasConflictingEthic &&
      !hasConflictingCivic
    );
  }

  private byzantineBureaucray(activeCivics: ICivic[]) {
    const hasConflictingCivic = !!activeCivics.find(
      civic =>
        civic.name === 'Exalted Priesthood' ||
        civic.name === 'Aristocratic Elite' ||
        civic.name === 'Technocracy' ||
        civic.name === 'Merchant Guilds'
    );

    return !hasConflictingCivic;
  }

  private merchantGuilds(activeCivics: ICivic[]) {
    const hasConflictingCivic = !!activeCivics.find(
      civic =>
        civic.name === 'Exalted Priesthood' ||
        civic.name === 'Aristocratic Elite' ||
        civic.name === 'Technocracy' ||
        civic.name === 'Byzantine Bureaucracy'
    );

    return !hasConflictingCivic;
  }

  private sharedBurdens(activeEthics: IEthic[], activeCivics: ICivic[]) {
    const hasRequiredEthic = !!activeEthics.find(
      ethic => ethic.name === 'fanatic_eqalitarian'
    );
    const hasConflictingEthic = !!activeEthics.find(
      ethic => ethic.name === 'xenophobe' || ethic.name === 'fanatic_xenophobe'
    );
    const hasConflictingCivic = !!activeCivics.find(
      civic => civic.name === 'Technocracy'
    );

    return hasRequiredEthic && !hasConflictingEthic && !hasConflictingCivic;
  }
}
