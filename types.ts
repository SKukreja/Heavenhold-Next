// Define the types for the data returned by the GraphQL query
export interface Item {
    id: string;
    title: string;
    uri?: string;
    featuredImage?: {
      node: {
        sourceUrl: string;
      };
    };
  }
  
  export interface ArtNode {
    node: {
      sourceUrl: string;
      title?: string;
    };
  }
  
  export interface AbilityFields {
    chainStateTrigger: string;
    chainStateResult: string;
    partyBuff: {
      affectsParty: boolean;
      value: string;
      stat: string;
    };
    chainSkillDescription: string;
    chainSkillName: string;
    normalAtkDescription: string;
    normalAtkName: string;
    specialAbilityName: string;
    specialAbilityDescription: string;
  }
  
  export interface BioFields {
    rarity: string;
    element: string;
    role: string;
    name: string;
    age: string;
    compatibleEquipment: string[];
    exclusiveWeapon: {
      edges: {
        node: Item;
      }[];
    };
    weight: string;
    story: string;
    species: string;
    naReleaseDate: string;
    krReleaseDate: string;
    jpReleaseDate: string;
    height: string;
  }
  
  export interface EvolutionFields {
    evolution1: ArtNode;
    evolution2: ArtNode;
    evolution3: ArtNode;
    evolution4: ArtNode;
    evolution5: ArtNode;
  }
  
  export interface StatFields {
    atk: number;
    basicResistance: number;
    cardSlot: number;
    crit: number;
    damageReduction: number;
    darkResistance: number;
    def: number;
    earthResistance: number;
    fieldGroupName: string;
    heal: number;
    hp: number;
    lightResistance: number;
    waterResistance: number;
    fireResistance: number;
    atkRank: number;
    defRank: number;
    hpRank: number;
    critRank?: number;
    healRank?: number;
    drRank?: number;
    heroCount?: number;
  }
  
  export interface HeroInformation {
    bioFields: BioFields;
    abilityFields: AbilityFields;
    portrait: ArtNode;
    illustration: ArtNode;
    illustration2: ArtNode;
    background: ArtNode;
    statFields: StatFields;
    evolutionFields: EvolutionFields;
  }
  
  export interface Hero {
    title: string;
    heroInformation: HeroInformation;
  }
  
  export interface GetHeroResponse {
    data: {
      hero: Hero;
    };
  }
  