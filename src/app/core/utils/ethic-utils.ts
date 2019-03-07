import { IEthic } from '../models/IEthic';

export class EthicUtils {
  public static getEthics() {
    const centerEthics: IEthic[] = [
      {
        name: 'gestalt_consciousness',
        typeId: 0,
        url: '../assets/Images/Ethics/Gestalt_consciousness.png'
      }
    ];
    const innerEthics: IEthic[] = [
      {
        name: 'eqalitarian',
        typeId: 1,
        url: '../assets/Images/Ethics/Egalitarian.png'
      },
      {
        name: 'materialist',
        typeId: 2,
        url: '../assets/Images/Ethics/Materialist.png'
      },
      {
        name: 'pacifist',
        typeId: 3,
        url: '../assets/Images/Ethics/Pacifist.png'
      },
      {
        name: 'xenophile',
        typeId: 4,
        url: '../assets/Images/Ethics/Xenophile.png'
      },
      {
        name: 'authoritarian',
        typeId: 1,
        url: '../assets/Images/Ethics/Authoritarian.png'
      },
      {
        name: 'spiritualist',
        typeId: 2,
        url: '../assets/Images/Ethics/Spiritualist.png'
      },
      {
        name: 'militarist',
        typeId: 3,
        url: '../assets/Images/Ethics/Militarist.png'
      },
      {
        name: 'xenophobe',
        typeId: 4,
        url: '../assets/Images/Ethics/Xenophobe.png'
      }
    ];

    const outerEthics: IEthic[] = [
      {
        name: 'fanatic_eqalitarian',
        typeId: 1,
        url: '../assets/Images/Ethics/Fanatic_Egalitarian.png'
      },
      {
        name: 'fanatic_materialist',
        typeId: 2,
        url: '../assets/Images/Ethics/Fanatic_Materialist.png'
      },
      {
        name: 'fanatic_pacifist',
        typeId: 3,
        url: '../assets/Images/Ethics/Fanatic_Pacifist.png'
      },
      {
        name: 'fanatic_xenophile',
        typeId: 4,
        url: '../assets/Images/Ethics/Fanatic_Xenophile.png'
      },
      {
        name: 'fanatic_authoritarian',
        typeId: 1,
        url: '../assets/Images/Ethics/Fanatic_Authoritarian.png'
      },
      {
        name: 'fanatic_spiritualist',
        typeId: 2,
        url: '../assets/Images/Ethics/Fanatic_Spiritualist.png'
      },
      {
        name: 'fanatic_militarist',
        typeId: 3,
        url: '../assets/Images/Ethics/Fanatic_Militarist.png'
      },
      {
        name: 'fanatic_xenophobe',
        typeId: 4,
        url: '../assets/Images/Ethics/Fanatic_Xenophobe.png'
      }
    ];

    return { centerEthics, innerEthics, outerEthics };
  }
}
