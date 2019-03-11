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
    activeAuthority: IAuthority
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

    return !!(hasRequiredAuthority && hasConflictingEthic < 0);
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
}
