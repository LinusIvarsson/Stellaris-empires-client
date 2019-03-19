import { IEthic } from 'src/app/core/models/IEthic';
import { IAuthority } from 'src/app/core/models/IAuthority';
import { ICivic } from 'src/app/core/models/ICivic';
import { CivicStatus } from 'src/app/core/utils/civics-utils';

export class CorporateCivicValidators {
  validateCorporateCivics(
    activeEthics: IEthic[],
    activeCivics: ICivic[],
    availableCivics: ICivic[],
    activeAuthority: IAuthority
  ) {
    for (const civic of [...availableCivics, ...activeCivics]) {
      switch (civic.name) {
        case 'Brand Loyalty': {
          this.setStatus(true, civic, activeCivics);
          break;
        }
        case 'Criminal Heritage': {
          this.setStatus(true, civic, activeCivics);
          break;
        }
        case 'Franchising': {
          this.setStatus(true, civic, activeCivics);
          break;
        }
        case 'Free Traders': {
          this.setStatus(true, civic, activeCivics);
          break;
        }
        case 'Gospel of the Masses': {
          this.setStatus(
            this.gospelOfTheMasses(activeEthics),
            civic,
            activeCivics
          );
          break;
        }
        case 'Indentured Assets': {
          this.setStatus(
            this.indenturedAssets(activeEthics),
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

  private gospelOfTheMasses(activeEthics: IEthic[]) {
    const hasRequiredEthic = !!activeEthics.find(
      ethic =>
        ethic.name === 'spiritualist' || ethic.name === 'fanatic_spiritualist'
    );

    return hasRequiredEthic;
  }

  private indenturedAssets(activeEthics: IEthic[]) {
    const hasRequiredEthic = !!activeEthics.find(
      ethic => ethic.name === 'authoritarian'
    );

    return hasRequiredEthic;
  }
}
