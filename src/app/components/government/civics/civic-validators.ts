import { IAuthority } from 'src/app/core/models/IAuthority';
import { IEthic } from 'src/app/core/models/IEthic';
import { ICivic } from 'src/app/core/models/ICivic';
import { EthicStatus } from 'src/app/core/utils/ethics-utils';
export class CivicValidators {
  static agrarianIdyll(activeEthics: IEthic[], activeCivics: ICivic[]) {
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

  static aristocraticElite(
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

  static beaconOfLiberty(activeAuthority: IAuthority, activeEthics: IEthic[]) {
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

  static slaversGuilds(activeEthics: IEthic[], activeCivics: ICivic[]) {
    const hasRequiredEthic = !!activeEthics.find(
      ethic =>
        ethic.name === 'authoritarian' || ethic.name === 'fanatic_authoritarian'
    );
    const hasConflictingCivics = activeCivics.find(
      civic => civic.name === 'Syncretic Evolution'
    );

    return hasRequiredEthic && !hasConflictingCivics;
  }

  static citizenService(activeAuthority: IAuthority, activeEthics: IEthic[]) {
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

  static corvéeSystem(activeEthics: IEthic[], activeCivics: ICivic[]) {
    const hasConflictingEthic = !!activeEthics.find(
      ethic =>
        ethic.name === 'eqalitarian' || ethic.name === 'fanatic_eqalitarian'
    );

    const hasConflictingCivic = !!activeCivics.find(
      civic => civic.name === 'Free Haven'
    );

    return !hasConflictingEthic && !hasConflictingCivic;
  }

  static distinguishedAdmiralty(activeEthics: IEthic[]) {
    const hasRequiredEthic = !!activeEthics.find(
      ethic =>
        ethic.name === 'militarist' || ethic.name === 'fanatic_militarist'
    );

    return hasRequiredEthic;
  }

  static exaltedPriesthood(
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

  static feudalSociety(activeAuthority: IAuthority) {
    if (!activeAuthority) {
      return false;
    }

    const hasRequiredAuthority = activeAuthority.name === 'Imperial';

    return hasRequiredAuthority;
  }

  static freeHaven(activeEthics: IEthic[], activeCivics: ICivic[]) {
    const hasRequiredEthic = !!activeEthics.find(
      ethic => ethic.name === 'xenophile' || ethic.name === 'fanatic_xenophile'
    );
    const hasConflictingCivic = !!activeCivics.find(
      civic => civic.name === 'Corvée System'
    );

    return hasRequiredEthic && !hasConflictingCivic;
  }

  static idealisticFoundation(activeEthics: IEthic[]) {
    const hasRequiredEthic = !!activeEthics.find(
      ethic =>
        ethic.name === 'eqalitarian' || ethic.name === 'fanatic_eqalitarian'
    );

    return hasRequiredEthic;
  }

  static imperialCult(activeAuthority: IAuthority, activeEthics: IEthic[]) {
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

  static inwardPerfection(activeEthics: IEthic[]) {
    const hasRequiredEthic = !!activeEthics.find(
      ethic => ethic.name === 'pacifist' || ethic.name === 'fanatic_pacifist'
    );
    const hasRequiredEthic2 = !!activeEthics.find(
      ethic => ethic.name === 'xenophobe' || ethic.name === 'fanatic_xenophobe'
    );

    return hasRequiredEthic && hasRequiredEthic2;
  }

  static meritocracy(activeAuthority: IAuthority) {
    if (!activeAuthority) {
      return true;
    }

    const hasConflictingAuthority =
      activeAuthority.name === 'Dictatorial' ||
      activeAuthority.name === 'Imperial';

    return !hasConflictingAuthority;
  }

  static nationalisticZeal(activeEthics: IEthic[]) {
    const hasRequiredEthic = !!activeEthics.find(
      ethic =>
        ethic.name === 'militarist' || ethic.name === 'fanatic_militarist'
    );

    return hasRequiredEthic;
  }

  static parliamentarySystem(activeAuthority: IAuthority) {
    if (!activeAuthority) {
      return false;
    }
    const hasRequiredAuthority = activeAuthority.name === 'Democratic';

    return hasRequiredAuthority;
  }

  static philosopherKing(activeAuthority: IAuthority) {
    if (!activeAuthority) {
      return false;
    }
    const hasRequiredAuthority =
      activeAuthority.name === 'Dictatorial' ||
      activeAuthority.name === 'Imperial';

    return hasRequiredAuthority;
  }

  static policeState(activeEthics: IEthic[]) {
    const hasConflictingEthic = !!activeEthics.find(
      ethic => ethic.name === 'fanatic_eqalitarian'
    );

    return !hasConflictingEthic;
  }

  static shadowCouncil(activeAuthority: IAuthority) {
    if (!activeAuthority) {
      return true;
    }
    const hasConflictedAuthority = activeAuthority.name === 'Imperial';

    return !hasConflictedAuthority;
  }

  static technocracy(activeEthics: IEthic[], activeCivics: ICivic[]) {
    const hasRequiredEthic = !!activeEthics.find(
      ethic =>
        ethic.name === 'materialist' || ethic.name === 'fanatic_materialist'
    );
    const hasConflictingCivic = !!activeCivics.find(
      civic => civic.name === 'Shared Burdens'
    );

    return hasRequiredEthic && !hasConflictingCivic;
  }

  static warriorCulture(activeEthics: IEthic[]) {
    const hasRequiredEthic = !!activeEthics.find(
      ethic =>
        ethic.name === 'militarist' || ethic.name === 'fanatic_militarist'
    );

    return hasRequiredEthic;
  }

  static fanaticPurifiers(activeEthics: IEthic[], activeCivics: ICivic[]) {
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

  static mechanist(activeEthics: IEthic[], activeCivics: ICivic[]) {
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

  static syncreticEvolution(activeCivics: ICivic[]) {
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
}
