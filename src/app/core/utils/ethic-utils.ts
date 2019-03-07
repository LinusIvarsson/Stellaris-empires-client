import { IEthic } from '../models/IEthic';

export enum EthicStatus {
  available = 'available',
  active = 'active',
  disabled = 'disabled'
}
export class EthicUtils {
  public static getEthics() {
    const centerEthics: IEthic[] = [
      {
        name: 'gestalt_consciousness',
        typeId: 0,
        url: '../assets/Images/Ethics/Gestalt_consciousness.png',
        status: EthicStatus.available,
        cost: 3
      }
    ];
    const innerEthics: IEthic[] = [
      {
        name: 'eqalitarian',
        typeId: 1,
        url: '../assets/Images/Ethics/Egalitarian.png',
        status: EthicStatus.available,
        cost: 1
      },
      {
        name: 'materialist',
        typeId: 2,
        url: '../assets/Images/Ethics/Materialist.png',
        status: EthicStatus.available,
        cost: 1
      },
      {
        name: 'pacifist',
        typeId: 3,
        url: '../assets/Images/Ethics/Pacifist.png',
        status: EthicStatus.available,
        cost: 1
      },
      {
        name: 'xenophile',
        typeId: 4,
        url: '../assets/Images/Ethics/Xenophile.png',
        status: EthicStatus.available,
        cost: 1
      },
      {
        name: 'authoritarian',
        typeId: 1,
        url: '../assets/Images/Ethics/Authoritarian.png',
        status: EthicStatus.available,
        cost: 1
      },
      {
        name: 'spiritualist',
        typeId: 2,
        url: '../assets/Images/Ethics/Spiritualist.png',
        status: EthicStatus.available,
        cost: 1
      },
      {
        name: 'militarist',
        typeId: 3,
        url: '../assets/Images/Ethics/Militarist.png',
        status: EthicStatus.available,
        cost: 1
      },
      {
        name: 'xenophobe',
        typeId: 4,
        url: '../assets/Images/Ethics/Xenophobe.png',
        status: EthicStatus.available,
        cost: 1
      }
    ];

    const outerEthics: IEthic[] = [
      {
        name: 'fanatic_eqalitarian',
        typeId: 1,
        url: '../assets/Images/Ethics/Fanatic_Egalitarian.png',
        status: EthicStatus.available,
        cost: 2
      },
      {
        name: 'fanatic_materialist',
        typeId: 2,
        url: '../assets/Images/Ethics/Fanatic_Materialist.png',
        status: EthicStatus.available,
        cost: 2
      },
      {
        name: 'fanatic_pacifist',
        typeId: 3,
        url: '../assets/Images/Ethics/Fanatic_Pacifist.png',
        status: EthicStatus.available,
        cost: 2
      },
      {
        name: 'fanatic_xenophile',
        typeId: 4,
        url: '../assets/Images/Ethics/Fanatic_Xenophile.png',
        status: EthicStatus.available,
        cost: 2
      },
      {
        name: 'fanatic_authoritarian',
        typeId: 1,
        url: '../assets/Images/Ethics/Fanatic_Authoritarian.png',
        status: EthicStatus.available,
        cost: 2
      },
      {
        name: 'fanatic_spiritualist',
        typeId: 2,
        url: '../assets/Images/Ethics/Fanatic_Spiritualist.png',
        status: EthicStatus.available,
        cost: 2
      },
      {
        name: 'fanatic_militarist',
        typeId: 3,
        url: '../assets/Images/Ethics/Fanatic_Militarist.png',
        status: EthicStatus.available,
        cost: 2
      },
      {
        name: 'fanatic_xenophobe',
        typeId: 4,
        url: '../assets/Images/Ethics/Fanatic_Xenophobe.png',
        status: EthicStatus.available,
        cost: 2
      }
    ];

    return { centerEthics, innerEthics, outerEthics };
  }
}
