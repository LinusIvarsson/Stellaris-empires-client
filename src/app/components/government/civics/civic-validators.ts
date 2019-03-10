import { IEthic } from 'src/app/core/models/IEthic';
import { ICivic } from 'src/app/core/models/ICivic';
export class CivicValidators {
  static validateAgrarianIdyll(activeEthic: IEthic[]) {
    const isValid = activeEthic.findIndex(
      ethic => ethic.name === 'pacifist' || ethic.name === 'fanatic_pacifist'
    );

    return !isValid;
  }
}
