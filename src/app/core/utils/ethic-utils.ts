import { environment } from '../../../environments/environment';
import { IEthic } from '../models/IEthic';

export enum EthicStatus {
  available = 'available',
  active = 'active',
  disabled = 'disabled'
}
export class EthicUtils {
  public static getEthics() {
    const baseUrl = environment.baseUrl;
    const centerEthics: IEthic[] = [
      {
        name: 'gestalt_consciousness',
        typeId: 0,
        url: `${baseUrl}/assets/Images/Ethics/Gestalt_consciousness.png`,
        status: EthicStatus.available,
        cost: 3,
        description: 'We reach into the void. The vast expanse becomes us.'
      }
    ];
    const innerEthics: IEthic[] = [
      {
        name: 'eqalitarian',
        typeId: 1,
        url: `${baseUrl}/assets/Images/Ethics/Egalitarian.png`,
        status: EthicStatus.available,
        cost: 1,
        description:
          'Any society that does not embrace equality between its members - where an individual can rise to any position with enough hard work - is not only deeply unfair, but ultimately counterproductive.'
      },
      {
        name: 'materialist',
        typeId: 2,
        url: `${baseUrl}/assets/Images/Ethics/Materialist.png`,
        status: EthicStatus.available,
        cost: 1,
        description:
          'As we reach for the stars, we must put away childish things; gods, spirits and other phantasms of the brain. Reality is cruel and unforgiving, yet we must steel ourselves and secure the survival of our race through the unflinching pursuit of science and technology.'
      },
      {
        name: 'pacifist',
        typeId: 3,
        url: `${baseUrl}/assets/Images/Ethics/Pacifist.png`,
        status: EthicStatus.available,
        cost: 1,
        description:
          'Conflict as a means to an end is a ridiculous concept. It is by nature destructive, destroying what was to be obtained or giving room to grow that which was to be destroyed.'
      },
      {
        name: 'xenophile',
        typeId: 4,
        url: `${baseUrl}/assets/Images/Ethics/Xenophile.png`,
        status: EthicStatus.available,
        cost: 1,
        description:
          'There exists, in all of us, a deep-seated fascination for the unknown. An adventurous spirit that rejects the familiar and glories in the unfamiliar, whatever - or whomever - it may be.'
      },
      {
        name: 'authoritarian',
        typeId: 1,
        url: `${baseUrl}/assets/Images/Ethics/Authoritarian.png`,
        status: EthicStatus.available,
        cost: 1,
        description:
          'A strong, guiding hand is essential to the success of any civilization - the alternative would be anarchy and chaos. It is the duty of the state to steer its citizens towards the paths that are the most productive'
      },
      {
        name: 'spiritualist',
        typeId: 2,
        url: `${baseUrl}/assets/Images/Ethics/Spiritualist.png`,
        status: EthicStatus.available,
        cost: 1,
        description:
          'There are those think it behooves us to remember how tiny we are, how pointless our lives in this vast uncaring universe... What nonsense! The only truth we can ever know is that of our own existence. The universe - in all its apparent glory - is but a dream we all happen to share.'
      },
      {
        name: 'militarist',
        typeId: 3,
        url: `${baseUrl}/assets/Images/Ethics/Militarist.png`,
        status: EthicStatus.available,
        cost: 1,
        description:
          'The only true virtues are courage and discipline, and channeled properly they can overcome any obstacle. Therein lies true strength; force withheld, a promise made.'
      },
      {
        name: 'xenophobe',
        typeId: 4,
        url: `${baseUrl}/assets/Images/Ethics/Xenophobe.png`,
        status: EthicStatus.available,
        cost: 1,
        description:
          'The stakes could not be higher as we reach into the vast uncharted expanses of the galaxy, for we are gambling with the very survival of our species! Never trust the alien; its false smile hides an unknowable mind...'
      }
    ];

    const outerEthics: IEthic[] = [
      {
        name: 'fanatic_eqalitarian',
        typeId: 1,
        url: `${baseUrl}/assets/Images/Ethics/Fanatic_Egalitarian.png`,
        status: EthicStatus.available,
        cost: 2,
        description:
          'Beware always those who would be despots, under the false presumption that their desires and agendas are somehow more imperative than those of their fellows. A society that does not see to the needs and rights of all of its members is not a society - it is a crime.'
      },
      {
        name: 'fanatic_materialist',
        typeId: 2,
        url: `${baseUrl}/assets/Images/Ethics/Fanatic_Materialist.png`,
        status: EthicStatus.available,
        cost: 2,
        description:
          'Although it hurts, we must grow up and put aside our outdated notions of morality. There is no "divine spark" granting special value to a living mind. No object has any intrinsic value apart from what we choose to grant it. Let us embrace the freedom of certitude, and achieve maximum efficiency in all things!'
      },
      {
        name: 'fanatic_pacifist',
        typeId: 3,
        url: `${baseUrl}/assets/Images/Ethics/Fanatic_Pacifist.png`,
        status: EthicStatus.available,
        cost: 2,
        description:
          'As civilized beings, the end of all armed conflict should be our primary concern. War is an evolutionary dead end, as futile as it is wasteful.'
      },
      {
        name: 'fanatic_xenophile',
        typeId: 4,
        url: `${baseUrl}/assets/Images/Ethics/Fanatic_Xenophile.png`,
        status: EthicStatus.available,
        cost: 2,
        description:
          'If there ever was such a thing as an absolute moral imperative, it would be to explore the cosmos and embrace all within it. We were never meant to journey alone.'
      },
      {
        name: 'fanatic_authoritarian',
        typeId: 1,
        url: `${baseUrl}/assets/Images/Ethics/Fanatic_Authoritarian.png`,
        status: EthicStatus.available,
        cost: 2,
        description:
          'A single voice, a single throne, a single state. It is the solemn duty of the masses to obey those enlightened few who have been charged with the great responsibility of leadership.'
      },
      {
        name: 'fanatic_spiritualist',
        typeId: 2,
        url: `${baseUrl}/assets/Images/Ethics/Fanatic_Spiritualist.png`,
        status: EthicStatus.available,
        cost: 2,
        description:
          'Our science has proved that Consciousness begets reality. We regard with patience the childlike efforts of those who delude themselves it is the other way around, as they play with their blocks of "hard matter".'
      },
      {
        name: 'fanatic_militarist',
        typeId: 3,
        url: `${baseUrl}/assets/Images/Ethics/Fanatic_Militarist.png`,
        status: EthicStatus.available,
        cost: 2,
        description:
          'The ability to project force is of paramount importance. The only way to preserve our way of life is to make sure everyone shares it; willingly or not...'
      },
      {
        name: 'fanatic_xenophobe',
        typeId: 4,
        url: `${baseUrl}/assets/Images/Ethics/Fanatic_Xenophobe.png`,
        status: EthicStatus.available,
        cost: 2,
        description:
          'Any alien influence must be ruthlessly quashed. Only by staying pure, and true to ourselves and the planet that gave us life can we guard against insidious Xeno plots. Even mastery over the Alien might not be enough to guarantee our own safety...'
      }
    ];

    return { centerEthics, innerEthics, outerEthics };
  }
}
