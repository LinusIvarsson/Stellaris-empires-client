import { IAuthority } from '../models/IAuthority';
import { environment } from 'src/environments/environment';

export enum AuthorityStatus {
  available = 'available',
  active = 'active',
  disabled = 'disabled'
}

export class AuthoritiesUtils {
  public static getAuthorities(): IAuthority[] {
    const baseUrl = environment.baseUrl;
    const authorities: IAuthority[] = [
      {
        name: 'Democratic',
        description:
          'Democratic governments have regular elections where all citizens can vote on who should represent them.',
        url: `${baseUrl}/assets/Images/Authorities/Auth_democratic.png`,
        status: AuthorityStatus.available
      },
      {
        name: 'Oligarchic',
        description:
          'Oligarchic governments are ruled by a small group of individuals that hold all political power.',
        url: `${baseUrl}/assets/Images/Authorities/Auth_oligarchic.png`,
        status: AuthorityStatus.available
      },
      {
        name: 'Dictatorial',
        description:
          'Dictatorial governments are ruled by a single individual for life that wields absolute control over the state.',
        url: `${baseUrl}/assets/Images/Authorities/Auth_dictatorial.png`,
        status: AuthorityStatus.available
      },
      {
        name: 'Imperial',
        description:
          'Imperial governments are similar to dictatorial ones, except that the throne is always inherited\
		   by a designated successor upon the rulers death.',
        url: `${baseUrl}/assets/Images/Authorities/Auth_imperial.png`,
        status: AuthorityStatus.available
      },
      {
        name: 'Hive Mind',
        description:
          'Hive Minds operate as a single organism more than as a state. \
		  The population has no free will, and act as an extension of the Hive Mind itself - much like the limbs of a body.\
		\
		  When cut off from the Mind, these drones become comatose and eventually \
		  wither and die. Any free individuals on planets owned by the Mind are driven away, \
		  killed, or simply treated as prey to feed the collective.',
        url: `${baseUrl}/assets/Images/Authorities/Auth_hive_mind.png`,
        status: AuthorityStatus.disabled
      },
      {
        name: 'Machine Intelligence',
        description:
          'Machine Intelligences are immense artificial group minds that have been networked into a single conscious entity. \
		Most of the actual "population" in such an empire consists of mindless work units who perform \
		their designated tasks without any semblance of free will.\
		\
		A small number of semi-autonomous agents are typically employed for \
		more specialized tasks that benefit from some degree of independent initiative.',
        url: `${baseUrl}/assets/Images/Authorities/Auth_machine_intelligence.png`,
        status: AuthorityStatus.disabled
      },
      {
        name: 'Corporate',
        description:
          'Corporate governments are organized as a massive commercial enterprise that has completely supplanted the role of the state.',
        url: `${baseUrl}/assets/Images/Authorities/Auth_corporate.png`,
        status: AuthorityStatus.available
      }
    ];

    return authorities;
  }
}
