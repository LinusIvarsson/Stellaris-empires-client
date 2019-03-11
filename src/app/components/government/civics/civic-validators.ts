import { IAuthority } from 'src/app/core/models/IAuthority';
import { IEthic } from 'src/app/core/models/IEthic';
import { ICivic } from 'src/app/core/models/ICivic';
export class CivicValidators {
  static validateAgrarianIdyll(activeEthics: IEthic[], activeCivics: ICivic[]) {
    const hasRequiredEthic = activeEthics.findIndex(
      ethic => ethic.name === 'pacifist' || ethic.name === 'fanatic_pacifist'
    );
    const hasConflictingEthic = activeCivics.findIndex(
      civic =>
        civic.name === 'Syncretic Evolution' ||
        civic.name === 'Slaver Guilds' ||
        civic.name === 'Post-Apocalyptic'
    );

    return !!(hasRequiredEthic >= 0 && hasConflictingEthic < 0);
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
    const hasConflictingEthic = activeEthics.findIndex(
      ethic =>
        ethic.name === 'eqalitarian' || ethic.name === 'fanatic_eqalitarian'
    );
    const hasConflictingCivics = activeCivics.findIndex(
      civic =>
        civic.name === 'Exalted Priesthood' ||
        civic.name === 'Merchant Guilds' ||
        civic.name === 'Technocracy' ||
        civic.name === 'Byzantine Bureaucracy'
    );

    return !!(
      hasRequiredAuthority &&
      hasConflictingEthic < 0 &&
      hasConflictingCivics < 0
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
    const hasRequiredEthic = activeEthics.findIndex(
      ethic =>
        ethic.name === 'eqalitarian' || ethic.name === 'fanatic_eqalitarian'
    );
    const hasConflictingEthic = activeEthics.findIndex(
      ethic => ethic.name === 'xenophobe' || ethic.name === 'fanatic_xenophobe'
    );

    return (
      !!hasRequiredAuthority && hasRequiredEthic >= 0 && hasConflictingEthic < 0
    );
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
}
