import { IAuthority } from 'src/app/core/models/IAuthority';
import { IEthic } from 'src/app/core/models/IEthic';
import { ICivic } from 'src/app/core/models/ICivic';
export class CivicValidators {
  static validateAgrarianIdyll(activeEthics: IEthic[], activeCivics: ICivic[]) {
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

  static validateAristocraticElite(
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

  static validateBeaconOfLiberty(
    activeAuthority: IAuthority,
    activeEthics: IEthic[]
  ) {
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

  static validateSlaversGuilds(activeEthics: IEthic[], activeCivics: ICivic[]) {
    const hasRequiredEthic = activeEthics.findIndex(
      ethic =>
        ethic.name === 'authoritarian' || ethic.name === 'fanatic_authoritarian'
    );
    const hasConflictingCivics = activeCivics.findIndex(
      civic => civic.name === 'Syncretic Evolution'
    );

    return !!(hasRequiredEthic >= 0 && hasConflictingCivics < 0);
  }

  static validateCitizenService(
    activeAuthority: IAuthority,
    activeEthics: IEthic[]
  ) {
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

  static validateCorvéeSystem(activeEthics: IEthic[], activeCivics: ICivic[]) {
    const hasConflictingEthic = !!activeEthics.find(
      ethic =>
        ethic.name === 'eqalitarian' || ethic.name === 'fanatic_eqalitarian'
    );

    const hasConflictingCivic = !!activeCivics.find(
      civic => civic.name === 'Free Haven'
    );

    return !hasConflictingEthic && !hasConflictingCivic;
  }

  static validateDistinguishedAdmiralty(activeEthics: IEthic[]) {
    const hasRequiredEthic = !!activeEthics.find(
      ethic =>
        ethic.name === 'militarist' || ethic.name === 'fanatic_militarist'
    );

    return hasRequiredEthic;
  }
}
