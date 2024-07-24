import React from 'react';

interface StatFormatterProps {
  statName: string;
  statValue: number;
  isPassive: boolean;
  affectsParty: boolean;
}

const StatFormatter: React.FC<StatFormatterProps> = ({ statName, statValue, isPassive = false, affectsParty = false }) => {
  const statsFormatting: { [key: string]: (value: number) => string } = {
    "Atk": (value) => `Atk <span class="text-green-500">+${value.toFixed(1)}%</span>`,
    "Crit Hit Chance": (value) => `Critical Hit Chance <span class="text-green-500">+${value.toFixed(1)}%</span>`,
    "Damage Reduction": (value) => `Damage Reduction: ${value}%`,
    "Def": (value) => `Defense: ${value}`,
    "HP": (value) => `Health Points: ${value}`,
    "Melee Damage": (value) => `Melee Damage <span class="text-green-500">+${value.toFixed(1)}%</span>`,
    "Range Damage": (value) => `Range Damage <span class="text-green-500">+${value.toFixed(1)}%</span>`,
    "Skill Damage": (value) => `Skill Damage <span class="text-green-500">+${value.toFixed(1)}%</span>`,
    "Atk increase on enemy kill": (value) => `Attack increase on enemy kill <span class="text-green-500">+${value.toFixed(1)}%</span>`,
    "HP recovery on enemy kill": (value) => `HP recovery on enemy kill <span class="text-green-500">+${value.toFixed(1)}%</span>`,
    "Seconds of weapon skill Regen time on enemy kill": (value) => `Weapon Skill Regen time on enemy kill <span class="text-green-500">+${value.toFixed(1)}%</span>`,
    "Shield increase on battle start": (value) => `Shield increase on battle start <span class="text-green-500">+${value.toFixed(1)}%</span>`,
    "Shield increase on enemy kill": (value) => `Shield increase on enemy kill <span class="text-green-500">+${value.toFixed(1)}%</span>`,
    "Weapon Skill Regen Speed": (value) => `Weapon Skill Regen Speed <span class="text-green-500">+${value.toFixed(1)}%</span>`,
    "Fire Atk": (value) => `Fire Atk <span class="text-green-500">+${value.toFixed(1)}%</span>`,
    "Earth Atk": (value) => `Earth Atk <span class="text-green-500">+${value.toFixed(1)}%</span>`,
    "Water Atk": (value) => `Water Atk <span class="text-green-500">+${value.toFixed(1)}%</span>`,
    "Dark Atk": (value) => `Dark Atk <span class="text-green-500">+${value.toFixed(1)}%</span>`,
    "Light Atk": (value) => `Light Atk <span class="text-green-500">+${value.toFixed(1)}%</span>`,
    "Basic Atk": (value) => `Basic Atk <span class="text-green-500">+${value.toFixed(1)}%</span>`,
    "Heal (Flat)": (value) => `Heal <span class="text-green-500">+${value}</span>`,
    "Heal (%)": (value) => `Heal <span class="text-green-500">+${value.toFixed(1)}%</span>`,
    "Atk, Heal [] for injured Chain Skills": (value) => `Attack and Heal for injured Chain Skills <span class="text-green-500">+${value.toFixed(1)}%</span>`,
    "Atk Decrease 100.0% negated": (value) => `Attack Decrease 100.0% negated: ${value}`,
    "Atk Decrease 70.0% negated": (value) => `Attack Decrease 70.0% negated: ${value}`,
    "Atk Decrease 30.0% negated": (value) => `Attack Decrease 30.0% negated: ${value}`,
    "Def Decrease 100.0% negated": (value) => `Defense Decrease 100.0% negated: ${value}`,
    "Def Decrease 50.0% negated": (value) => `Defense Decrease 50.0% negated: ${value}`,
    "Doom Damage 100.0% negated": (value) => `Doom Damage 100.0% negated: ${value}`,
    "Doom Damage 30.0% negated": (value) => `Doom Damage 30.0% negated: ${value}`,
    "Injury Damage 100.0% negated": (value) => `Injury Damage 100.0% negated: ${value}`,
    "Injury Damage 50.0% negated": (value) => `Injury Damage 50.0% negated: ${value}`,
    "On hit extra damage": (value) => `On hit extra damage <span class="text-green-500">+${value.toFixed(1)}%</span>`,
    "On hit heal allies": (value) => `On hit heal allies <span class="text-green-500">+${value.toFixed(1)}%</span>`,
    "Increase damage to enemies with HP": (value) => `Increase damage to enemies with HP <span class="text-green-500">+${value.toFixed(1)}%</span>`,
    "Decrease damage taken by % of increased Skill Damage": (value) => `Decrease damage taken by % of increased Skill Damage <span class="text-green-500">+${value.toFixed(1)}%</span>`,
    "Increase damage to tanker Hero": (value) => `Increase damage to tanker Hero <span class="text-green-500">+${value.toFixed(1)}%</span>`,
    "Crit Hit Multiplier": (value) => `Critical Hit Multiplier <span class="text-green-500">+${value.toFixed(1)}%</span>`,
  };

  const formatStat = (name: string, value: number, isPassive:boolean, affectsParty: boolean) => {
    if (statsFormatting[name]) {
      return (affectsParty ? "[Party] " : "") + statsFormatting[name](value);
    }
    return 'Stat not found';
  };

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: formatStat(statName, statValue, isPassive, affectsParty) }} />
    </div>
  );
};

export default StatFormatter;
