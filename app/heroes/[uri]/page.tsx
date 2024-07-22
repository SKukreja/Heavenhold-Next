"use client";

import { Suspense, useState, useEffect } from "react";
import Loading from "#/app/components/loading";
import Bio from "./Bio";
import Abilities from "./Abilities";
import { Hero, GetHeroResponse } from "#/types"; // Import types

async function fetchHero(uri: string): Promise<Hero> {
  const query = `
  query GetHeroByUri($uri: ID!) {
    hero(id: $uri, idType: URI) {
      title
      heroInformation {
        bioFields {
          rarity
          element
          role
          name
          age
          compatibleEquipment
          exclusiveWeapon {
            nodes {
              ... on Item {
                id
                title
                weapons {
                  maxDps
                  element
                  exclusiveEffects
                  exclusive
                  magazine
                  maxAtk
                  minAtk
                  minDps
                  weaponSkill
                  weaponSkillAtk
                  weaponSkillChain
                  weaponSkillDescription
                  weaponSkillName
                  weaponSkillRegenTime
                  weaponType
                  engraving {
                    value
                    stat
                  }
                }
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
                equipmentSubOptions {
                  fieldGroupName
                  maxLines
                  subAtk
                  subAtkOnKill
                  subBasicTypeAtk
                  subCritChance
                  subDamageReduction
                  subDarkTypeAtk
                  subDef
                  subDefFlat
                  subEarthTypeAtk
                  subFireTypeAtk
                  subHealFlat
                  subHealPercent
                  subHp
                  subHpOnKill
                  subLightTypeAtk
                  subShieldOnKill
                  subShieldOnStart
                  subSkillDamage
                  subSkillRegenOnKill
                  subSkillRegenSpeed
                  subWaterTypeAtk
                }
                equipmentOptions {
                  atk
                  atkOnKill
                  basicTypeAtk
                  critChance
                  critHitMultiplier
                  damageReduction
                  darkTypeAtk
                  decreaseDamageTakenBySkill
                  def
                  defFlat
                  earthTypeAtk
                  extraDamageType
                  fieldGroupName
                  fireTypeAtk
                  healFlat
                  healPercent
                  hp
                  hpOnKill
                  increaseDamageAmount
                  increaseDamageCondition
                  increaseDamageThreshold
                  increaseDamageToTanks
                  lb5Value
                  lightTypeAtk
                  minDamageReduction
                  minDefFlat
                  onHitDamage
                  onHitDamageSeconds
                  onHitHealAllies
                  onHitHealSeconds
                  shieldOnKill
                  shieldOnStart
                  skillDamage
                  skillRegenOnKill
                  skillRegenSpeed
                  waterTypeAtk
                }
                itemInformation {
                  rarity
                }
              }
            }
          }
          weight
          story
          species
          naReleaseDate
          krReleaseDate
          jpReleaseDate
          height
        }
        abilityFields {
          chainStateTrigger
          chainStateResult
          partyBuff {
            affectsParty
            value
            stat
          }
          chainSkillDescription
          chainSkillName
          normalAtkDescription
          normalAtkName
          specialAbilityName
          specialAbilityDescription
        }
        portrait {
          art {
            node {
              sourceUrl
            }
          }
          title
        }
        illustration {
          node {
            sourceUrl
          }
        }
        illustration2 {
          node {
            sourceUrl
          }
        }
        background {
          node {
            sourceUrl
          }
        }
        mlbAwakeningFields {
          midGradeHpMlb
          midGradeDreamMlb
          midGradeDefMlb
          midGradeAtkMlb
          lowGradeHpMlb
          lowGradeDreamMlb
          lowGradeDefMlb
          lowGradeAtkMlb
          legendaryAwakeningMlb
          highGradeHpMlb
          highGradeDreamMlb
          highGradeDefMlb
          highGradeAtkMlb
          gold
        }
        statFields {
          atk
          basicResistance
          cardSlot
          crit
          damageReduction
          darkResistance
          def
          earthResistance
          fieldGroupName
          heal
          hp
          lightResistance
          waterResistance
          fireResistance
          atkRank
          defRank
          hpRank
          critRank
          healRank
          drRank
          heroCount
        }
        statPriorities {
          statPriority {
            edges {
              node {
                ... on Post {
                  id
                  title
                }
              }
            }
          }
          buildName
          explanation
        }
        portrait2 {
          art {
            node {
              sourceUrl
              title
            }
          }
        }
        costumes {
          edges {
            node {
              ... on Item {
                id
                uri
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
                title
              }
            }
          }
        }
        evolutionFields2 {
          evolution1 {
            node {
              sourceUrl
            }
          }
          evolution2 {
            node {
              sourceUrl
            }
          }
          evolution3 {
            node {
              sourceUrl
            }
          }
          evolution4 {
            node {
              sourceUrl
            }
          }
          evolution5 {
            node {
              sourceUrl
            }
          }
        }
        evolutionFields {
          evolution1 {
            node {
              sourceUrl
            }
          }
          evolution2 {
            node {
              sourceUrl
            }
          }
          evolution3 {
            node {
              sourceUrl
            }
          }
          evolution5 {
            node {
              sourceUrl
            }
          }
          evolution4 {
            node {
              sourceUrl
            }
          }
        }
        evaluationFields {
          pros
          cons
          tags
        }
        buildGuideFields {
          suggestedWeapons {
            suggestedWeapon {
              edges {
                node {
                  ... on Item {
                    id
                    uri
                    title
                    featuredImage {
                      node {
                        sourceUrl
                      }
                    }
                  }
                }
              }
            }
            weaponExplanation
          }
          suggestedShield {
            suggestedShield {
              edges {
                node {
                  ... on Item {
                    id
                    uri
                    title
                    featuredImage {
                      node {
                        sourceUrl
                      }
                    }
                  }
                }
              }
            }
            shieldExplanation
          }
          suggestedMerch {
            merchExplanation
            suggestedMerch {
              edges {
                node {
                  ... on Item {
                    id
                    uri
                    title
                    featuredImage {
                      node {
                        sourceUrl
                      }
                    }
                  }
                }
              }
            }
          }
          suggestedCards {
            cardExplanation
            suggestedCard
          }
          suggestedAccessories {
            accessoryExplanation
            suggestedAccessory {
              edges {
                node {
                  ... on Item {
                    id
                    uri
                    title
                    featuredImage {
                      node {
                        sourceUrl
                      }
                    }
                  }
                }
              }
            }
          }
        }
        bioFields2 {
          weight
          story
          name
          height
          age
        }
        analysisFields {
          detailedReview
        }
      }    
    }
  }
  `;

  const variables = { uri };

  const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 60,
    },
    body: JSON.stringify({ query, variables }),
  });

  const responseBody: GetHeroResponse = await res.json();
  console.log(responseBody)
  if (responseBody && responseBody.data && responseBody.data.hero) {
    return responseBody.data.hero;
  } else {
    throw new Error("Failed to fetch the post");
  }
}

interface HeroDetailsProps {
  params: {
    uri: string;
  };
}

export default function HeroDetails({ params }: HeroDetailsProps) {
  const [hero, setHero] = useState<Hero | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("Bio");

  useEffect(() => {
    async function loadHero() {
      const fetchedHero = await fetchHero(params.uri);
      setHero(fetchedHero);
      setLoading(false);
    }
    loadHero();
  }, [params.uri]);

  const renderTabContent = () => {
    if (!hero) return null;
    switch (activeTab) {
      case "Bio":
        return <Bio hero={hero} />;
      case "Abilities":
        return <Abilities hero={hero} />;
      // Add cases for other tabs as needed
      default:
        return <Bio hero={hero} />;
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (!hero) {
    return <div>Error: Hero not found</div>;
  }

  return (
    <main className="h-screen overflow-hidden bg-cover bg-no-repeat bg-center after:bg-black after:opacity-90 after:absolute after:inset-0" style={{ backgroundImage: `url(${hero.heroInformation.background?.node?.sourceUrl ?? ""})` }}>
      <div className="p-8 hero-buttons w-full h-48 text-xl relative overflow-hidden flex gap-8 mb-8 z-20">
        <span onClick={() => setActiveTab("Bio")} className={`p-8 text-center cursor-pointer hover:bg-gray-700 hover:text-white font-bold w-full h-full flex items-center justify-center card ${activeTab === "Bio" ? "bg-gray-700 text-white" : "bg-gray-800 text-gray-400"}`}>Bio</span>
        <span onClick={() => setActiveTab("Abilities")} className={`p-8 text-center cursor-pointer hover:bg-gray-700 hover:text-white font-bold w-full h-full flex items-center justify-center card ${activeTab === "Abilities" ? "bg-gray-700 text-white" : "bg-gray-800 text-gray-400"}`}>Abilities</span>
        {/* Add more tabs as needed */}
      </div>
      {renderTabContent()}
    </main>
  );
}