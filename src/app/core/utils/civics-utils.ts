import { ICivic } from './../models/ICivic';
import { environment } from 'src/environments/environment';

export enum CivicStatus {
  available = 'available',
  active = 'active',
  disabled = 'disabled',
  invalid = 'invalid'
}

export class CivicsUtils {
  public static getStandardEthics(): ICivic[] {
    const baseUrl = environment.baseUrl;
    return [
      {
        name: 'Agrarian Idyll',
        description:
          'A simple and peaceful life can often be the most rewarding. \
		  This agrarian society has, to a large extent, managed to avoid large-scale urbanization.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_agrarian_idyll.png`,
        status: CivicStatus.disabled
      },
      {
        name: 'Aristocratic Elite',
        description:
          'This society has an entrenched nobility that occupies the upper echelons of society.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_aristocratic_elite.png`,
        status: CivicStatus.disabled
      },
      {
        name: 'Beacon of Liberty',
        description:
          'This society is a shining beacon of light in a sea of darkness. \
		  Liberty and individual freedoms are held in the highest regard here.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_beacon_of_liberty.png`,
        status: CivicStatus.disabled
      },
      {
        name: 'Citizen Service',
        description:
          'Are you doing your part? Full citizenship and the political \
		  responsibility that comes with it is limited to those who have served a tour of duty in the military. Service guarantees citizenship.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_citizen_service.png`,
        status: CivicStatus.disabled
      },
      {
        name: 'Corvée System',
        description:
          'This society considers it the absolute right of the state to decide where its citizens live and work.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_corvee_system.png`,
        status: CivicStatus.disabled
      },
      {
        name: 'Cutthroat Politics',
        description:
          'The political system in this society is renowned for its intrigue. \
		  Power struggles, shady backroom deals and cloak and dagger scheming are par for the course. \
		  Those who survive long enough to learn the game, however, tend to learn it well.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_cutthroat_politics.png`,
        status: CivicStatus.disabled
      },
      {
        name: 'Distinguished Admiralty',
        description:
          'The Fleet and the Admiralty have unusually prominent roles in this society, \
		  wielding a great deal of influence in political circles. They have the pick of the litter when it comes to new military recruits.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_distinguished_admiralty.png`,
        status: CivicStatus.disabled
      },
      {
        name: 'Efficient Bureaucracy',
        description:
          'This society is renowned for its efficiency. Not only do the mag-trains run on time, \
		  but the colossal bureaucratic apparatus required to run an interstellar nation has been greatly streamlined.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_efficient_bureaucracy.png`,
        status: CivicStatus.disabled
      },
      {
        name: 'Environmentalist',
        description:
          'This society seeks to co-exist in harmony with nature. \
		  Great care is taken to preserve the environment and limit consumerism where possible.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_environmentalist.png`,
        status: CivicStatus.disabled
      },
      {
        name: 'Exalted Priesthood',
        description:
          'To guard against heresy, this society is ruled by a religious council \
		  consisting of the wisest and most pious members of the clergy.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_exalted_priesthood.png`,
        status: CivicStatus.disabled
      },
      {
        name: 'Feudal Society',
        description:
          'This society is organized in a feudal manner, with a monarch whose rule \
		  relies on powerful vassals that govern their territories with considerable autonomy.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_feudal_realm.png`,
        status: CivicStatus.disabled
      },
      {
        name: 'Free Haven',
        description:
          'This society has a well-earned reputation as a free haven. The tired, the poor, \
		  the huddled masses yearning to breathe free - all are welcome here, regardless of their species or origin.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_free_haven.png`,
        status: CivicStatus.disabled
      },
      {
        name: 'Functional Architecture',
        description:
          'This society is renowned for its simple yet functional architecture. \
		  There are those who would refer to this building style as boring or even depressing, \
		  but in most cases, concrete does the job just as well as any other building material.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_functional_architecture.png`,
        status: CivicStatus.disabled
      },
      {
        name: 'Idealistic Foundation',
        description:
          'This society was founded on strong idealistic values. \
		  Whether the current government remains true to them or not, the people have not forgotten.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_idealistic_foundation.png`,
        status: CivicStatus.disabled
      },
      {
        name: 'Imperial Cult',
        description:
          'This society has a dominant state religion where the ruler is worshiped as a living deity.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_imperial_cult.png`,
        status: CivicStatus.disabled
      },
      {
        name: 'Inward Perfection',
        description:
          'This calm and pacifist society has little use for strangers who do not understand their way of life. \
		  More than anything, they would prefer to be left alone.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_inwards_perfection.png`,
        status: CivicStatus.disabled
      },
      {
        name: 'Meritocracy',
        description:
          'An individuals social station or personal connections should have no bearing on their profession. \
		  The sole basis for advancement in this society is demonstrated ability and talent.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_meritocracy.png`,
        status: CivicStatus.disabled
      },
      {
        name: 'Mining Guilds',
        description:
          'Several large mining guilds have reached a dominant position in this society. The government relies heavily on their support.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_mining_guilds.png`,
        status: CivicStatus.disabled
      },
      {
        name: 'Nationalistic Zeal',
        description:
          'A strong sense of nationalistic pride permeates all layers of this society.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_nationalistic_zeal.png`,
        status: CivicStatus.disabled
      },
      {
        name: 'Parliamentary System',
        description:
          'The parliamentary system in this society encourages a free and lively debate. \
		  Currying favor with one of the dominant political factions can prove to be quite advantageous.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_parliamentary_system.png`,
        status: CivicStatus.disabled
      },
      {
        name: 'Philosopher King',
        description:
          'It is not enough to simply rule. The Ship of State must be guided by a king that wields \
		  enough wisdom and knowledge to steer it true.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_philosopher_king.png`,
        status: CivicStatus.disabled
      },
      {
        name: 'Police State',
        description:
          'To quash any traces of dissent, the population in this repressive society \
		  is carefully monitored and controlled by a large internal police force.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_police_state.png`,
        status: CivicStatus.disabled
      },
      {
        name: 'Shadow Council',
        description:
          'Unbeknownst to its own citizens, this society is actually manipulated from behind \
		  the scenes by a secretive shadow council. Appearances must be kept, but the tyranny \
		  of the majority should also be guarded against. After all, what if the fools vote for the wrong candidate?',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_shadow_council.png`,
        status: CivicStatus.disabled
      },
      {
        name: 'Slaver Guilds',
        description:
          'Much of the true political power in this society rests with a number of powerful and ruthless slaver guilds. \
		  They know how to get the most out of a slave.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_slaver_guilds.png`,
        status: CivicStatus.disabled
      },
      {
        name: 'Technocracy',
        description:
          'To maximize efficiency, this society is governed according to the principles \
		  of science and rationality. The personal whims of an ignorant and dangerously \
		  unqualified political elite must not be allowed to interfere.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_technocracy.png`,
        status: CivicStatus.disabled
      },
      {
        name: 'Warrior Culture',
        description:
          'This society has developed into a hardy warrior culture. \
		  Martial prowess is valued above all else, and true glory can only be found on the field of battle.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_warrior_culture.png`,
        status: CivicStatus.disabled
      },
      {
        name: 'Fanatic Purifiers',
        description:
          'This society appears hellbent on scouring the galaxy of all other sapient life. \
		  Come what may, they will suffer no xenos to live.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_fanatic_purifiers.png`,
        status: CivicStatus.disabled
      },
      {
        name: 'Mechanist',
        description:
          'This society has been preoccupied with the idea of metallic automatons since the early Steam Age. \
		  Although many said it could not be done, the first true robots \
		  left the assembly lines long before even rudimentary space flight was achieved.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_mechanists.png`,
        status: CivicStatus.disabled
      },
      {
        name: 'Syncretic Evolution',
        description:
          'A second species forms an integral part of this society. They are big, strong and most of them \
		  have the intelligence of a particularly dim-witted child. Ancient wars have culled their species \
		  of their most aggressive tendencies, leaving them quite servile.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_syncretic_evolution.png`,
        status: CivicStatus.disabled
      },
      {
        name: 'Life-Seeded',
        description:
          'This society has evolved in a paradise, possibly designed just for them',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_life_seeded.png`,
        status: CivicStatus.disabled
      },
      {
        name: 'Post-Apocalyptic',
        description:
          'Baptized by nuclear fire, this society has faced total annihilation - and survived. \
		  Devastated yet unbroken, they have rebuilt civilization from the ashes of the old world.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_post_apocalyptic.png`,
        status: CivicStatus.disabled
      },
      {
        name: 'Barbaric Despoilers',
        description:
          'This society holds few things sacred. To fight is to live, and the strongest may seize whatever they covet.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_barbaric_despoilers.png`,
        status: CivicStatus.disabled
      },
      {
        name: 'Byzantine Bureaucracy',
        description:
          'This society is largely governed by a complex and, to the outsider, almost labyrinthine system of bureaucracy. \
		  An army of officials and functionaries work tirelessly to keep the government running smoothly and ensure \
		  no citizens are allocated resources they cannot demonstrate a properly filed and triple-stamped need for.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_byzantine_bureaucracy.png`,
        status: CivicStatus.disabled
      },
      {
        name: 'Merchant Guilds',
        description:
          'A number of powerful and very influential merchant guilds have risen to prominent positions in this society. \
		  They hold significant sway with the government.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_merchant_guilds.png`,
        status: CivicStatus.disabled
      },
      {
        name: 'Shared Burdens',
        description:
          'This society believes in an equitable distribution of resources, making little to no distinction \
		  between the needs of ruler and ruled. All work together for the benefit of the whole.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_shared_burdens.png`,
        status: CivicStatus.disabled
      }
    ];
  }
}
