import { IAuthority } from 'src/app/core/models/IAuthority';
import { IEthic } from 'src/app/core/models/IEthic';
import { ICivic } from 'src/app/core/models/ICivic';
export class CivicValidators {
  static validateAgrarianIdyll(activeEthics: IEthic[]) {
    const hasRequiredEthic = activeEthics.findIndex(
      ethic => ethic.name === 'pacifist' || ethic.name === 'fanatic_pacifist'
    );

    return hasRequiredEthic >= 0;
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
    const hasNotEthic = activeEthics.findIndex(
      ethic =>
        ethic.name === 'eqalitarian' || ethic.name === 'fanatic_eqalitarian'
    );

    if (hasRequiredAuthority && hasNotEthic < 0) {
      return true;
    } else {
      return false;
    }
  }
}
