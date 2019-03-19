import { ICivic } from './../models/ICivic';
import { environment } from 'src/environments/environment';

export enum CivicStatus {
  available = 'available',
  active = 'active',
  disabled = 'disabled',
  invalid = 'invalid'
}

export enum CivicTypes {
  standard = 'Standard',
  corporate = 'Corporate',
  gestalt = 'Gestalt',
  machine = 'Machine'
}

export class CivicsUtils {
  public static getStandardCivics(): ICivic[] {
    const baseUrl = environment.baseUrl;
    return [
      {
        name: 'Agrarian Idyll',
        description:
          'A simple and peaceful life can often be the most rewarding. \
		  This agrarian society has, to a large extent, managed to avoid large-scale urbanization.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_agrarian_idyll.png`,
        status: CivicStatus.disabled,
        type: 'Standard'
      },
      {
        name: 'Aristocratic Elite',
        description:
          'This society has an entrenched nobility that occupies the upper echelons of society.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_aristocratic_elite.png`,
        status: CivicStatus.disabled,
        type: 'Standard'
      },
      {
        name: 'Beacon of Liberty',
        description:
          'This society is a shining beacon of light in a sea of darkness. \
		  Liberty and individual freedoms are held in the highest regard here.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_beacon_of_liberty.png`,
        status: CivicStatus.disabled,
        type: 'Standard'
      },
      {
        name: 'Citizen Service',
        description:
          'Are you doing your part? Full citizenship and the political \
		  responsibility that comes with it is limited to those who have served a tour of duty in the military. Service guarantees citizenship.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_citizen_service.png`,
        status: CivicStatus.disabled,
        type: 'Standard'
      },
      {
        name: 'Corvée System',
        description:
          'This society considers it the absolute right of the state to decide where its citizens live and work.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_corvee_system.png`,
        status: CivicStatus.disabled,
        type: 'Standard'
      },
      {
        name: 'Cutthroat Politics',
        description:
          'The political system in this society is renowned for its intrigue. \
		  Power struggles, shady backroom deals and cloak and dagger scheming are par for the course. \
		  Those who survive long enough to learn the game, however, tend to learn it well.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_cutthroat_politics.png`,
        status: CivicStatus.disabled,
        type: 'Standard'
      },
      {
        name: 'Distinguished Admiralty',
        description:
          'The Fleet and the Admiralty have unusually prominent roles in this society, \
		  wielding a great deal of influence in political circles. They have the pick of the litter when it comes to new military recruits.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_distinguished_admiralty.png`,
        status: CivicStatus.disabled,
        type: 'Standard'
      },
      {
        name: 'Efficient Bureaucracy',
        description:
          'This society is renowned for its efficiency. Not only do the mag-trains run on time, \
		  but the colossal bureaucratic apparatus required to run an interstellar nation has been greatly streamlined.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_efficient_bureaucracy.png`,
        status: CivicStatus.disabled,
        type: 'Standard'
      },
      {
        name: 'Environmentalist',
        description:
          'This society seeks to co-exist in harmony with nature. \
		  Great care is taken to preserve the environment and limit consumerism where possible.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_environmentalist.png`,
        status: CivicStatus.disabled,
        type: 'Standard'
      },
      {
        name: 'Exalted Priesthood',
        description:
          'To guard against heresy, this society is ruled by a religious council \
		  consisting of the wisest and most pious members of the clergy.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_exalted_priesthood.png`,
        status: CivicStatus.disabled,
        type: 'Standard'
      },
      {
        name: 'Feudal Society',
        description:
          'This society is organized in a feudal manner, with a monarch whose rule \
		  relies on powerful vassals that govern their territories with considerable autonomy.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_feudal_realm.png`,
        status: CivicStatus.disabled,
        type: 'Standard'
      },
      {
        name: 'Free Haven',
        description:
          'This society has a well-earned reputation as a free haven. The tired, the poor, \
		  the huddled masses yearning to breathe free - all are welcome here, regardless of their species or origin.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_free_haven.png`,
        status: CivicStatus.disabled,
        type: 'Standard'
      },
      {
        name: 'Functional Architecture',
        description:
          'This society is renowned for its simple yet functional architecture. \
		  There are those who would refer to this building style as boring or even depressing, \
		  but in most cases, concrete does the job just as well as any other building material.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_functional_architecture.png`,
        status: CivicStatus.disabled,
        type: 'Standard'
      },
      {
        name: 'Idealistic Foundation',
        description:
          'This society was founded on strong idealistic values. \
		  Whether the current government remains true to them or not, the people have not forgotten.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_idealistic_foundation.png`,
        status: CivicStatus.disabled,
        type: 'Standard'
      },
      {
        name: 'Imperial Cult',
        description:
          'This society has a dominant state religion where the ruler is worshiped as a living deity.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_imperial_cult.png`,
        status: CivicStatus.disabled,
        type: 'Standard'
      },
      {
        name: 'Inward Perfection',
        description:
          'This calm and pacifist society has little use for strangers who do not understand their way of life. \
		  More than anything, they would prefer to be left alone.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_inwards_perfection.png`,
        status: CivicStatus.disabled,
        type: 'Standard'
      },
      {
        name: 'Meritocracy',
        description:
          'An individuals social station or personal connections should have no bearing on their profession. \
		  The sole basis for advancement in this society is demonstrated ability and talent.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_meritocracy.png`,
        status: CivicStatus.disabled,
        type: 'Standard'
      },
      {
        name: 'Mining Guilds',
        description:
          'Several large mining guilds have reached a dominant position in this society. The government relies heavily on their support.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_mining_guilds.png`,
        status: CivicStatus.disabled,
        type: 'Standard'
      },
      {
        name: 'Nationalistic Zeal',
        description:
          'A strong sense of nationalistic pride permeates all layers of this society.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_nationalistic_zeal.png`,
        status: CivicStatus.disabled,
        type: 'Standard'
      },
      {
        name: 'Parliamentary System',
        description:
          'The parliamentary system in this society encourages a free and lively debate. \
		  Currying favor with one of the dominant political factions can prove to be quite advantageous.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_parliamentary_system.png`,
        status: CivicStatus.disabled,
        type: 'Standard'
      },
      {
        name: 'Philosopher King',
        description:
          'It is not enough to simply rule. The Ship of State must be guided by a king that wields \
		  enough wisdom and knowledge to steer it true.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_philosopher_king.png`,
        status: CivicStatus.disabled,
        type: 'Standard'
      },
      {
        name: 'Police State',
        description:
          'To quash any traces of dissent, the population in this repressive society \
		  is carefully monitored and controlled by a large internal police force.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_police_state.png`,
        status: CivicStatus.disabled,
        type: 'Standard'
      },
      {
        name: 'Shadow Council',
        description:
          'Unbeknownst to its own citizens, this society is actually manipulated from behind \
		  the scenes by a secretive shadow council. Appearances must be kept, but the tyranny \
		  of the majority should also be guarded against. After all, what if the fools vote for the wrong candidate?',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_shadow_council.png`,
        status: CivicStatus.disabled,
        type: 'Standard'
      },
      {
        name: 'Slaver Guilds',
        description:
          'Much of the true political power in this society rests with a number of powerful and ruthless slaver guilds. \
		  They know how to get the most out of a slave.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_slaver_guilds.png`,
        status: CivicStatus.disabled,
        type: 'Standard'
      },
      {
        name: 'Technocracy',
        description:
          'To maximize efficiency, this society is governed according to the principles \
		  of science and rationality. The personal whims of an ignorant and dangerously \
		  unqualified political elite must not be allowed to interfere.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_technocracy.png`,
        status: CivicStatus.disabled,
        type: 'Standard'
      },
      {
        name: 'Warrior Culture',
        description:
          'This society has developed into a hardy warrior culture. \
		  Martial prowess is valued above all else, and true glory can only be found on the field of battle.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_warrior_culture.png`,
        status: CivicStatus.disabled,
        type: 'Standard'
      },
      {
        name: 'Fanatic Purifiers',
        description:
          'This society appears hellbent on scouring the galaxy of all other sapient life. \
		  Come what may, they will suffer no xenos to live.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_fanatic_purifiers.png`,
        status: CivicStatus.disabled,
        type: 'Standard'
      },
      {
        name: 'Mechanist',
        description:
          'This society has been preoccupied with the idea of metallic automatons since the early Steam Age. \
		  Although many said it could not be done, the first true robots \
		  left the assembly lines long before even rudimentary space flight was achieved.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_mechanists.png`,
        status: CivicStatus.disabled,
        type: 'Standard'
      },
      {
        name: 'Syncretic Evolution',
        description:
          'A second species forms an integral part of this society. They are big, strong and most of them \
		  have the intelligence of a particularly dim-witted child. Ancient wars have culled their species \
		  of their most aggressive tendencies, leaving them quite servile.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_syncretic_evolution.png`,
        status: CivicStatus.disabled,
        type: 'Standard'
      },
      {
        name: 'Life-Seeded',
        description:
          'This society has evolved in a paradise, possibly designed just for them',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_life_seeded.png`,
        status: CivicStatus.disabled,
        type: 'Standard'
      },
      {
        name: 'Post-Apocalyptic',
        description:
          'Baptized by nuclear fire, this society has faced total annihilation - and survived. \
		  Devastated yet unbroken, they have rebuilt civilization from the ashes of the old world.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_post_apocalyptic.png`,
        status: CivicStatus.disabled,
        type: 'Standard'
      },
      {
        name: 'Barbaric Despoilers',
        description:
          'This society holds few things sacred. To fight is to live, and the strongest may seize whatever they covet.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_barbaric_despoilers.png`,
        status: CivicStatus.disabled,
        type: 'Standard'
      },
      {
        name: 'Byzantine Bureaucracy',
        description:
          'This society is largely governed by a complex and, to the outsider, almost labyrinthine system of bureaucracy. \
		  An army of officials and functionaries work tirelessly to keep the government running smoothly and ensure \
		  no citizens are allocated resources they cannot demonstrate a properly filed and triple-stamped need for.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_byzantine_bureaucracy.png`,
        status: CivicStatus.disabled,
        type: 'Standard'
      },
      {
        name: 'Merchant Guilds',
        description:
          'A number of powerful and very influential merchant guilds have risen to prominent positions in this society. \
		  They hold significant sway with the government.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_merchant_guilds.png`,
        status: CivicStatus.disabled,
        type: 'Standard'
      },
      {
        name: 'Shared Burdens',
        description:
          'This society believes in an equitable distribution of resources, making little to no distinction \
		  between the needs of ruler and ruled. All work together for the benefit of the whole.',
        url: `${baseUrl}/assets/Images/Civics/Standard/Civic_shared_burdens.png`,
        status: CivicStatus.disabled,
        type: 'Standard'
      }
    ];
  }

  public static getCorporateCivics(): ICivic[] {
    const baseUrl = environment.baseUrl;

    return [
      {
        name: 'Brand Loyalty',
        description:
          'This Megacorporation has fostered a great sense of brand loyalty among its internal consumer \
		   base. Its catchy corporate slogans can be recited by nearly everyone.',
        url: `${baseUrl}/assets/Images/Civics/Corporate/Civic_brand_loyalty.png`,
        status: CivicStatus.disabled,
        type: 'Standard'
      },
      {
        name: 'Criminal Heritage',
        description:
          'This megacorporation can trace its origins back to a crime syndicate that eventually \
		  grew powerful enough to supplant all forms of local government.',
        url: `${baseUrl}/assets/Images/Civics/Corporate/Civic_criminal_heritage.png`,
        status: CivicStatus.disabled,
        type: 'Standard'
      },
      {
        name: 'Franchising',
        description:
          'This megacorporation relies heavily on franchising. Subsidiaries share a greater cut of their \
		  profits with their corporate overlord, in exchange for a license to market their goods under established brands.',
        url: `${baseUrl}/assets/Images/Civics/Corporate/Civic_franchising.png`,
        status: CivicStatus.disabled,
        type: 'Standard'
      },
      {
        name: 'Free Traders',
        description:
          'The trading fleets of this megacorporation are bolstered by semi-independent free traders operating under license.',
        url: `${baseUrl}/assets/Images/Civics/Corporate/Civic_free_traders.png`,
        status: CivicStatus.disabled,
        type: 'Standard'
      },
      {
        name: 'Gospel of the Masses',
        description:
          'This Megacorporation embraces a curious blend of commercial and spiritualistic values, in which the position of \
		  ordained minister and corporate officer have merged into a single role.',
        url: `${baseUrl}/assets/Images/Civics/Corporate/Civic_gospel_of_the_masses.png`,
        status: CivicStatus.disabled,
        type: 'Standard'
      },
      {
        name: 'Indentured Assets',
        description:
          'This Megacorporation specializes in large indentured workforces. It has little to do with the barbaric practice of \
		  slavery - these workers are merely paying off their debts... indefinitely.',
        url: `${baseUrl}/assets/Images/Civics/Corporate/Civic_indentured_assets.png`,
        status: CivicStatus.disabled,
        type: 'Standard'
      },
      {
        name: 'Media Conglomerate',
        description:
          'Before branching into other fields, this Megacorporation began its rise to fortune as a media conglomerate. Its \
		  PR department are still masters of spinning stories and presenting the latest quarterly report in the most advantageous way.',
        url: `${baseUrl}/assets/Images/Civics/Corporate/Civic_media_conglomerate.png`,
        status: CivicStatus.disabled,
        type: 'Standard'
      },
      {
        name: 'Naval Contractors',
        description:
          'This Megacorporation relies on several semi-independant navy contractors to increase its fleet size. \
		  Competing for bids, the contractors are always struggling to outperform one another.',
        url: `${baseUrl}../../../assets/Images/Civics/Corporate/Civic_naval_contractors.png`,
        status: CivicStatus.disabled,
        type: 'Standard'
      },
      {
        name: 'Private Military Companies',
        description:
          'This Megacorporation has a large number of powerful private military companies on its payroll. \
		  These mercenary contractors augment its ground forces.',
        url: `${baseUrl}../../../assets/Images/Civics/Corporate/Civic_private_military_companies.png`,
        status: CivicStatus.disabled,
        type: 'Standard'
      },
      {
        name: 'Private Prospectors',
        description:
          'Building better worlds is hazardous work, but this Megacorporation relies on private prospectors \
		  to chart and establish footholds on promising planets.',
        url: `${baseUrl}../../../assets/Images/Civics/Corporate/Civic_private_prospectors.png`,
        status: CivicStatus.disabled,
        type: 'Standard'
      },
      {
        name: 'Ruthless Competition',
        description:
          'All level of society in this Megacorporation are constantly vying with each other in ruthless competition. \
		  Its a dog-eat-dog world.',
        url: `${baseUrl}../../../assets/Images/Civics/Corporate/Civic_ruthless_competition.png`,
        status: CivicStatus.disabled,
        type: 'Standard'
      },
      {
        name: 'Trading Posts',
        description:
          'Good business is where you find it. This Megacorporation has a long tradition of spreading its influence through\
		   the establishment on trading posts. Their starbases are busy centers of trade.',
        url: `${baseUrl}../../../assets/Images/Civics/Corporate/Civic_trading_posts.png`,
        status: CivicStatus.disabled,
        type: 'Standard'
      }
    ];
  }
}
