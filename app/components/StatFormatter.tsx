import React from 'react';

interface StatFormatterProps {
  statName: string;
  statValue: string;
  isPassive: boolean;
  element?: string;
  affectsParty?: boolean;
}

const StatFormatter: React.FC<StatFormatterProps> = ({ statName, statValue, isPassive = false, affectsParty = false, element }) => {
  const partyBuffFormatting: { [key: string]: (value: string) => string } = {
    "Atk": (value) => `Atk <span class="text-green-500">+${value}%</span>`,
    "Crit Hit Chance": (value) => `Critical Hit Chance <span class="text-green-500">+${value}%</span>`,
    "Damage Reduction": (value) => `Damage Reduction: ${value}%`,
    "Def": (value) => `Defense: ${value}`,
    "HP": (value) => `Health Points: ${value}`,
    "Melee Damage": (value) => `Melee Damage <span class="text-green-500">+${value}%</span>`,
    "Range Damage": (value) => `Range Damage <span class="text-green-500">+${value}%</span>`,
    "Skill Damage": (value) => `Skill Damage <span class="text-green-500">+${value}%</span>`,
    "Atk increase on enemy kill": (value) => `Attack increase on enemy kill <span class="text-green-500">+${value}%</span>`,
    "HP recovery on enemy kill": (value) => `HP recovery on enemy kill <span class="text-green-500">+${value}%</span>`,
    "Seconds of weapon skill Regen time on enemy kill": (value) => `Weapon Skill Regen time on enemy kill <span class="text-green-500">+${value}%</span>`,
    "Shield increase on battle start": (value) => `Shield increase on battle start <span class="text-green-500">+${value}%</span>`,
    "Shield increase on enemy kill": (value) => `Shield increase on enemy kill <span class="text-green-500">+${value}%</span>`,
    "Weapon Skill Regen Speed": (value) => `Weapon Skill Regen Speed <span class="text-green-500">+${value}%</span>`,
    "Fire Atk": (value) => `Fire Atk <span class="text-green-500">+${value}%</span>`,
    "Earth Atk": (value) => `Earth Atk <span class="text-green-500">+${value}%</span>`,
    "Water Atk": (value) => `Water Atk <span class="text-green-500">+${value}%</span>`,
    "Dark Atk": (value) => `Dark Atk <span class="text-green-500">+${value}%</span>`,
    "Light Atk": (value) => `Light Atk <span class="text-green-500">+${value}%</span>`,
    "Basic Atk": (value) => isPassive ? `Basic Atk <span class="text-green-500">+${value}%</span>` : `Basic Atk: ${value}%`,
    "Heal (Flat)": (value) => `Heal <span class="text-green-500">+${value}</span>`,
    "Heal (%)": (value) => `Heal <span class="text-green-500">+${value}%</span>`,
    "Atk, Heal [] for injured Chain Skills": (value) => `Attack and Heal for injured Chain Skills <span class="text-green-500">+${value}%</span>`,
    "Atk Decrease 100.0% negated": (value) => `Attack Decrease 100.0% negated: ${value}`,
    "Atk Decrease 70.0% negated": (value) => `Attack Decrease 70.0% negated: ${value}`,
    "Atk Decrease 30.0% negated": (value) => `Attack Decrease 30.0% negated: ${value}`,
    "Def Decrease 100.0% negated": (value) => `Defense Decrease 100.0% negated: ${value}`,
    "Def Decrease 50.0% negated": (value) => `Defense Decrease 50.0% negated: ${value}`,
    "Doom Damage 100.0% negated": (value) => `Doom Damage 100.0% negated: ${value}`,
    "Doom Damage 30.0% negated": (value) => `Doom Damage 30.0% negated: ${value}`,
    "Injury Damage 100.0% negated": (value) => `Injury Damage 100.0% negated: ${value}`,
    "Injury Damage 50.0% negated": (value) => `Injury Damage 50.0% negated: ${value}`,
    "On hit extra damage": (value) => `On hit extra damage <span class="text-green-500">+${value}%</span>`,
    "On hit heal allies": (value) => `On hit heal allies <span class="text-green-500">+${value}%</span>`,
    "Increase damage to enemies with HP": (value) => `Increase damage to enemies with HP <span class="text-green-500">+${value}%</span>`,
    "Decrease damage taken by % of increased Skill Damage": (value) => `Decrease damage taken by % of increased Skill Damage <span class="text-green-500">+${value}%</span>`,
    "Increase damage to tanker Hero": (value) => `Increase damage to tanker Hero <span class="text-green-500">+${value}%</span>`,
    "Crit Hit Multiplier": (value) => `Critical Hit Multiplier <span class="text-green-500">+${value}%</span>`,
  };

  const equipmentFormatting: { [key: string]: (value: string, element:string) => string } = {
    "Atk (%)": (value) => `Atk +${parseFloat(value) > 0 ? parseFloat(value).toFixed(1) : "?"}%`,
    "Crit Hit Chance": (value) => `Crit Hit Chance +${parseFloat(value) > 0 ? parseFloat(value).toFixed(1) : "?"}%`,
    "Damage Reduction": (value) => `Damage Reduction: ${value}%`,
    "Def (Flat)": (value) => `<span className="font-bold">Def</span> ${value}`,
    "Def (%)": (value) => `<span className="font-bold">Def</span> +${parseFloat(value) > 0 ? parseFloat(value).toFixed(1) : "?"}%`,
    "HP (Flat)": (value) => `<span className="font-bold">HP</span> ${value}`,
    "HP (%)": (value) => `<span className="font-bold">HP</span> +${parseFloat(value) > 0 ? parseFloat(value).toFixed(1) : "?"}%`,
    "Melee Damage": (value) => `Melee Damage ${value}%`,
    "Range Damage": (value) => `Range Damage ${value}%`,
    "Skill Damage": (value) => `Skill Damage +${parseFloat(value) > 0 ? parseFloat(value).toFixed(1) : "?"}%`,
    "Atk increase on enemy kill": (value) => `Attack increase on enemy kill ${value}%`,
    "HP recovery on enemy kill": (value) => `HP recovery on enemy kill ${value}%`,
    "Seconds of weapon skill Regen time on enemy kill": (value) => `Weapon Skill Regen time on enemy kill ${value}%`,
    "Shield increase on battle start": (value) => `Shield increase on battle start ${value}%`,
    "Shield increase on enemy kill": (value) => `Shield increase on enemy kill ${value}%`,
    "Weapon Skill Regen Speed": (value) => `Weapon Skill Regen Speed +${parseFloat(value) > 0 ? parseFloat(value).toFixed(1) : "?"}%`,
    "Fire Atk": (value, element) => `<span class="text-${element ?? "white"} font-bold">Fire Atk</span> ${value}`,
    "Earth Atk": (value, element) => `<span class="text-${element ?? "white"} font-bold">Earth Atk</span> ${value}`,
    "Water Atk": (value, element) => `<span class="text-${element ?? "white"} font-bold">Water Atk</span> ${value}`,
    "Dark Atk": (value, element) => `<span class="text-${element ?? "white"} font-bold">Dark Atk</span> ${value}`,
    "Light Atk": (value, element) => `<span class="text-${element ?? "white"} font-bold">Light Atk</span> ${value}`,
    "Basic Atk": (value, element) => `<span class="text-${element ?? "white"} font-bold">Basic Atk</span> ${value}`,
    "Heal (Flat)": (value) => `Heal ${value}`,
    "Heal (%)": (value) => `Heal ${value}%`,
    "Atk, Heal [] for injured Chain Skills": (value) => `Attack and Heal for injured Chain Skills ${value}%`,
    "Atk Decrease 100.0% negated": (value) => `Attack Decrease 100.0% negated: ${value}`,
    "Atk Decrease 70.0% negated": (value) => `Attack Decrease 70.0% negated: ${value}`,
    "Atk Decrease 30.0% negated": (value) => `Attack Decrease 30.0% negated: ${value}`,
    "Def Decrease 100.0% negated": (value) => `Defense Decrease 100.0% negated: ${value}`,
    "Def Decrease 50.0% negated": (value) => `Defense Decrease 50.0% negated: ${value}`,
    "Doom Damage 100.0% negated": (value) => `Doom Damage 100.0% negated: ${value}`,
    "Doom Damage 30.0% negated": (value) => `Doom Damage 30.0% negated: ${value}`,
    "Injury Damage 100.0% negated": (value) => `Injury Damage 100.0% negated: ${value}`,
    "Injury Damage 50.0% negated": (value) => `Injury Damage 50.0% negated: ${value}`,
    "On hit extra damage": (value) => `On hit extra damage ${value}%`,
    "On hit heal allies": (value) => `On hit heal allies ${value}%`,
    "Increase damage to enemies with HP": (value) => `Increase damage to enemies with HP ${value}%`,
    "Decrease damage taken by % of increased Skill Damage": (value) => `Decrease damage taken by % of increased Skill Damage ${value}%`,
    "Increase damage to tanker Hero": (value) => `Increase damage to tanker Hero ${value}%`,
    "Crit Hit Multiplier": (value) => `Critical Hit Multiplier ${value}%`,
  };

  const formatStat = (name: string, value: string, isPassive:boolean, affectsParty: boolean, element: string) => {
    if (partyBuffFormatting[name] && isPassive) {
      return (affectsParty ? "[Party] " : "") + partyBuffFormatting[name](parseFloat(value).toFixed(1).toString());
    }
    else {
      return equipmentFormatting[name](value, element);
    }
    return 'Stat not found';
  };

  return (
      <div dangerouslySetInnerHTML={{ __html: formatStat(statName, statValue, isPassive, affectsParty, element ? element.toString().toLowerCase() : "") }} />
  );
};

export default StatFormatter;
