export interface Item {
  id: string;
  title: string;
  uri?: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
    };
  };
  weapons?: Weapon;
  equipmentSubOptions?: EquipmentOption[];
  equipmentOptions?: EquipmentOption[];
  itemInformation?: ItemInformation;
}

export interface ItemInformation {
  rarity: string;
}

export interface Weapon {
  maxDps: number;
  element: string;
  exclusiveEffects: string;
  exclusive: boolean;
  magazine: number;
  maxAtk: number;
  minAtk: number;
  minDps: number;
  weaponSkill: string;
  weaponSkillAtk: number;
  weaponSkillChain: string;
  weaponSkillDescription: string;
  weaponSkillName: string;
  weaponSkillRegenTime: number;
  weaponType: string;
  engraving?: Engraving;
}

export interface Engraving {
  value: string;
  stat: string;
}

export interface EquipmentOption {
  fieldGroupName: string;
  maxLines?: number;
  subAtk?: number;
  subAtkOnKill?: number;
  subBasicTypeAtk?: number;
  subCritChance?: number;
  subDamageReduction?: number;
  subDarkTypeAtk?: number;
  subDef?: number;
  subDefFlat?: number;
  subEarthTypeAtk?: number;
  subFireTypeAtk?: number;
  subHealFlat?: number;
  subHealPercent?: number;
  subHp?: number;
  subHpOnKill?: number;
  subLightTypeAtk?: number;
  subShieldOnKill?: number;
  subShieldOnStart?: number;
  subSkillDamage?: number;
  subSkillRegenOnKill?: number;
  subSkillRegenSpeed?: number;
  subWaterTypeAtk?: number;
  atk?: number;
  atkOnKill?: number;
  basicTypeAtk?: number;
  critChance?: number;
  critHitMultiplier?: number;
  damageReduction?: number;
  darkTypeAtk?: number;
  decreaseDamageTakenBySkill?: number;
  def?: number;
  defFlat?: number;
  earthTypeAtk?: number;
  extraDamageType?: number;
  fireTypeAtk?: number;
  healFlat?: number;
  healPercent?: number;
  hp?: number;
  hpOnKill?: number;
  increaseDamageAmount?: number;
  increaseDamageCondition?: string;
  increaseDamageThreshold?: number;
  increaseDamageToTanks?: number;
  lb5Value?: number;
  lightTypeAtk?: number;
  minDamageReduction?: number;
  minDefFlat?: number;
  onHitDamage?: number;
  onHitDamageSeconds?: number;
  onHitHealAllies?: number;
  onHitHealSeconds?: number;
  shieldOnKill?: number;
  shieldOnStart?: number;
  skillDamage?: number;
  skillRegenOnKill?: number;
  skillRegenSpeed?: number;
  waterTypeAtk?: number;
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
    nodes: Item[];
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

export interface StatPriority {
  edges: {
    node: {
      id: string;
      title: string;
    };
  }[];
}

export interface StatPriorities {
  statPriority: StatPriority;
  buildName: string;
  explanation: string;
}

export interface Costume {
  id: string;
  uri: string;
  title: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
}

export interface CostumeEdge {
  node: Costume;
}

export interface CostumeEdges {
  edges: CostumeEdge[];
}

export interface MlbAwakeningFields {
  midGradeHpMlb: string;
  midGradeDreamMlb: string;
  midGradeDefMlb: string;
  midGradeAtkMlb: string;
  lowGradeHpMlb: string;
  lowGradeDreamMlb: string;
  lowGradeDefMlb: string;
  lowGradeAtkMlb: string;
  legendaryAwakeningMlb: string;
  highGradeHpMlb: string;
  highGradeDreamMlb: string;
  highGradeDefMlb: string;
  highGradeAtkMlb: string;
  gold: string;
}

export interface EvaluationFields {
  pros: string;
  cons: string;
  tags: string[];
}

export interface BuildGuideFields {
  suggestedWeapons: SuggestedItemGroup;
  suggestedShield: SuggestedItemGroup;
  suggestedMerch: SuggestedItemGroup;
  suggestedCards: SuggestedCard;
  suggestedAccessories: SuggestedItemGroup;
}

export interface SuggestedItemGroup {
  suggestedItem: SuggestedItem[];
  explanation: string;
}

export interface SuggestedItem {
  edges: {
    node: {
      id: string;
      uri: string;
      title: string;
      featuredImage: {
        node: {
          sourceUrl: string;
        };
      };
    };
  }[];
}

export interface SuggestedCard {
  cardExplanation: string;
  suggestedCard: string;
}

export interface AnalysisFields {
  detailedReview: string;
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
  statPriorities: StatPriorities;
  mlbAwakeningFields: MlbAwakeningFields;
  costumes: CostumeEdges;
  evaluationFields: EvaluationFields;
  buildGuideFields: BuildGuideFields;
  bioFields2: BioFields;
  analysisFields: AnalysisFields;
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
