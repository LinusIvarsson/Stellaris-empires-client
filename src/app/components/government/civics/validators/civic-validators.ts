import { CivicStatus } from 'src/app/core/utils/civics-utils';
import { IAuthority } from 'src/app/core/models/IAuthority';
import { IEthic } from 'src/app/core/models/IEthic';
import { ICivic } from 'src/app/core/models/ICivic';
import { StandardCivicValidators } from './standard-civic-validators';
import { CorporateCivicValidators } from './corporate-civic-validators';
import { AuthorityType } from 'src/app/core/utils/authorities-utils';
export class CivicValidators {
  standardValidator = new StandardCivicValidators();
  corporateValidator = new CorporateCivicValidators();
  validateCivics(
    activeEthics: IEthic[],
    activeCivics: ICivic[],
    availableCivics: ICivic[],
    activeAuthority: IAuthority
  ) {
    if (
      (activeAuthority && activeAuthority.type === AuthorityType.standard) ||
      !activeAuthority
    ) {
      this.standardValidator.validateStandardCivics(
        activeEthics,
        activeCivics,
        availableCivics,
        activeAuthority
      );

      for (const civic of activeCivics) {
        if (civic.type !== activeAuthority.type) {
          civic.status = CivicStatus.invalid;
        }
      }
    } else if (activeAuthority.type === AuthorityType.corporate) {
      this.corporateValidator.validateCorporateCivics(
        activeEthics,
        activeCivics,
        availableCivics,
        activeAuthority
      );

      for (const civic of activeCivics) {
        if (civic.type !== activeAuthority.type) {
          civic.status = CivicStatus.invalid;
        }
      }
    }
  }
}
