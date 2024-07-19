import { Suspense } from "react";
import Loading from "../../loading";
import { formatDate } from "#/ui/helpers";
import FadeInImage from "#/app/components/FadeInImage";
import { montserrat } from "#/ui/fonts";

// Define the types for the data returned by the GraphQL query
interface Item {
  id: string;
  title: string;
  uri?: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
    };
  };
}

interface ArtNode {
  node: {
    sourceUrl: string;
    title?: string;
  };
}

interface AbilityFields {
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

interface BioFields {
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

interface EvolutionFields {
  evolution1: ArtNode;
  evolution2: ArtNode;
  evolution3: ArtNode;
  evolution4: ArtNode;
  evolution5: ArtNode;
}

interface StatFields {
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
}

interface HeroInformation {
  bioFields: BioFields;
  abilityFields: AbilityFields;
  portrait: ArtNode;
  illustration: ArtNode;
  illustration2: ArtNode;
  background: ArtNode;
  statFields: StatFields;
  evolutionFields: EvolutionFields;
}

interface Hero {
  title: string;
  heroInformation: HeroInformation;
}

interface GetHeroResponse {
  data: {
    hero: Hero;
  };
}

async function getPost(uri: string): Promise<Hero> {
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
            edges {
              node {
                ... on Item {
                  id
                  title
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
  console.log(responseBody);
  if (responseBody && responseBody.data && responseBody.data.hero) {
    return responseBody.data.hero;
  } else {
    throw new Error("Failed to fetch the post");
  }
}

interface PostDetailsProps {
  params: {
    uri: string;
  };
}

export default async function PostDetails({ params }: PostDetailsProps): Promise<JSX.Element> {
  const hero = await getPost(params.uri);
  const rarity = `r-${hero.heroInformation.bioFields.rarity.toString().replace(/ /g, "-").toLowerCase()}`;
  return (
    <main className="h-screen overflow-hidden bg-cover bg-no-repeat bg-center after:bg-black after:opacity-90 after:absolute after:inset-0" style={{backgroundImage: `url(${hero.heroInformation.background?.node?.sourceUrl ?? ""})`}}>
      <Suspense fallback={<Loading />}>
        <div className="p-8 hero-buttons w-full h-48 text-xl relative overflow-hidden flex gap-8 mb-8 z-20">
          <span className="p-8 text-center cursor-pointer hover:bg-gray-700 hover:text-white font-bold w-full h-full flex items-center justify-center card bg-gray-700 text-white">Bio</span>
          <span className="p-8 text-center cursor-pointer hover:bg-gray-700 hover:text-white font-bold w-full h-full flex items-center justify-center card bg-gray-800 text-gray-400">Abilities</span>          
          <span className="p-8 text-center cursor-pointer hover:bg-gray-700 hover:text-white font-bold w-full h-full flex items-center justify-center card bg-gray-800 text-gray-400">Build</span>
          <span className="p-8 text-center cursor-pointer hover:bg-gray-700 hover:text-white font-bold w-full h-full flex items-center justify-center card bg-gray-800 text-gray-400">Review</span>
          <span className="p-8 text-center cursor-pointer hover:bg-gray-700 hover:text-white font-bold w-full h-full flex items-center justify-center card bg-gray-800 text-gray-400">Teams</span>
          <span className="p-8 text-center cursor-pointer hover:bg-gray-700 hover:text-white font-bold w-full h-full flex items-center justify-center card bg-gray-800 text-gray-400">Costumes</span>   
          <span className="p-8 text-center cursor-pointer hover:bg-gray-700 hover:text-white font-bold w-full h-full flex items-center justify-center card bg-gray-800 text-gray-400">Gallery</span>          
        </div>
        <div className="relative overflow-visible z-10 w-full h-[calc(100vh-12rem)] items-start flex px-8">          
          <div className="px-8 w-1/4 flex-col justify-start h-[calc(100%-8rem)] flex">
            <div className="w-full h-auto whitespace-nowrap">
              <h2 className="text-2xl font-medium uppercase tracking-widest mb-3">{hero.title.replace(hero.heroInformation.bioFields.name, '').trim()}</h2>
              <h1 className="text-7xl font-extrabold font-oswald -ml-1 tracking-wide mb-6">{hero.heroInformation.bioFields.name}</h1>
              <div className={`flex gap-4 align-middle `}>
                  {hero.heroInformation.bioFields.element && (
                    <FadeInImage src={`/icons/${hero.heroInformation.bioFields.element.toLowerCase()}.webp`} className="flex flex-col justify-center h-full object-contain" width={30} height={30} alt={hero.heroInformation.bioFields.element} />
                  )}                        
                  {hero.heroInformation.bioFields.role && (
                    <FadeInImage src={`/icons/${hero.heroInformation.bioFields.role.toLowerCase()}.webp`} className="flex flex-col justify-center h-full object-contain"  width={30} height={30} alt={hero.heroInformation.bioFields.role} />
                  )}            
                <span className={`text-2xl mb-1 tracking-widest h-full flex flex-col justify-center ${rarity === 'r-3-star' ? 'text-yellow-500' : ''} 
                ${rarity === 'r-2-star' ? 'text-gray-300' : ''} 
                ${rarity === 'r-1-star' ? 'text-orange-600' : ''}`}>{rarity === 'r-3-star' && '★★★'}{rarity === 'r-2-star' && '★★'}{rarity === 'r-1-star' && '★'}</span>                        
              </div>
            </div>            
              <div className="pt-16 flex flex-col gap-6 justify-between w-full text-sm">
                <div className="w-full"><span className="w-1/2 inline-block font-bold">Name</span><span className="w-1/2 inline-block text-right">{hero.heroInformation.bioFields.name}</span></div>
                <div className="w-full"><span className="w-1/2 inline-block font-bold">Released</span><span className="w-1/2 inline-block text-right">{formatDate(hero.heroInformation.bioFields.naReleaseDate)}</span></div>
                <div className="w-full"><span className="w-1/2 inline-block font-bold">Age</span><span className="w-1/2 inline-block text-right">{hero.heroInformation.bioFields.age}</span></div>
                <div className="w-full"><span className="w-1/2 inline-block font-bold">Height</span><span className="w-1/2 inline-block text-right">{hero.heroInformation.bioFields.height}</span></div>
                <div className="w-full"><span className="w-1/2 inline-block font-bold">Weight</span><span className="w-1/2 inline-block text-right">{hero.heroInformation.bioFields.weight}</span></div>
                <div className="w-full"><span className="w-1/2 inline-block font-bold">Species</span><span className="w-1/2 inline-block text-right">{hero.heroInformation.bioFields.species}</span></div>
                <div className="w-full"><span className="w-1/2 inline-block font-bold">Equipment</span><span className="w-1/2 inline-block text-right">{hero.heroInformation.bioFields.compatibleEquipment.map((equipment) => (<span className="ml-2" key={"eq-" + equipment}>{equipment}</span>))}</span></div>
              </div>
              <div className="pt-16 block relative tracking-wider">
                <h2 className="mb-6 text-4xl font-medium font-oswald">Stats</h2>
                <div className="mb-2">
                  <div className="bg-red-600 text-xs h-8 px-4 items-center rounded-xs flex justify-between">
                    <span className="font-bold">ATK {hero.heroInformation.statFields.atk}</span>
                    <span>RANK: 75/132</span>
                  </div>
                </div>
                <div className="mb-2">
                  <div className="bg-green-600 text-xs flex px-4 items-center justify-between h-8 rounded-xs">
                    <span className="font-bold">HP {hero.heroInformation.statFields.hp}</span>
                    <span>RANK: 20/132</span>
                  </div>
                </div>
                <div className="mb-2">
                  <div className="bg-blue-600 text-xs h-8 px-4 items-center rounded-xs flex justify-between">
                    <span className="font-bold">DEF {hero.heroInformation.statFields.def}</span>
                    <span>RANK: 68/132</span>
                  </div>
                </div>
                <div className="flex gap-2 justify-between">
                  <div className="flex items-center w-1/2 bg-red-600 text-white font-medium justify-center text-xs py-2 px-3 rounded-xs">
                    BASIC RESISTANCE -30%
                  </div>
                  <div className="flex items-center w-1/2 bg-green-600 text-white text-xs py-4 px-3 justify-center rounded-xs">
                    DARK RESISTANCE +30%
                  </div>
                </div>
              </div>
          </div>
          <div className={"w-2/4 h-full flex items-center relative justify-center"}>
            <FadeInImage src={hero.heroInformation.illustration?.node.sourceUrl ?? ""} width={1000} height={800} maxHeight={true} priority={true} className="object-contain w-full h-full -mt-16" quality={100} alt={hero.heroInformation.illustration?.node.title ?? ""} />
          </div>
          <div className="w-1/4 h-full px-8">
            <h2 className="mb-6 text-4xl font-medium font-oswald">Evolutions</h2>
            <div className="w-full flex gap-4 mb-16">
              {hero.heroInformation.evolutionFields.evolution1 && (
                <FadeInImage src={hero.heroInformation.evolutionFields.evolution1.node.sourceUrl} width={100} height={100} className="object-contain w-24 h-24" alt="Evolution 1" />
              )}
              {hero.heroInformation.evolutionFields.evolution2 && (
                <FadeInImage src={hero.heroInformation.evolutionFields.evolution2.node.sourceUrl} width={100} height={100} className="object-contain w-24 h-24" alt="Evolution 2" />
              )}
              {hero.heroInformation.evolutionFields.evolution3 && (
                <FadeInImage src={hero.heroInformation.evolutionFields.evolution3.node.sourceUrl} width={100} height={100} className="object-contain w-24 h-24" alt="Evolution 3" />
              )}
              {hero.heroInformation.evolutionFields.evolution4 && (
                <FadeInImage src={hero.heroInformation.evolutionFields.evolution4.node.sourceUrl} width={100} height={100} className="object-contain w-24 h-24" alt="Evolution 4" />
              )}
              {hero.heroInformation.evolutionFields.evolution5 && (
                <FadeInImage src={hero.heroInformation.evolutionFields.evolution5.node.sourceUrl} width={100} height={100} className="object-contain w-24 h-24" alt="Evolution 5" />
              )}                
            </div>
            <h2 className="mb-6 text-4xl font-medium font-oswald">Story</h2>
            <div className="w-full h-[calc(100%-32rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-gray-1100">
              <span className="w-full h-full overflow-y-scroll text-sm" dangerouslySetInnerHTML={{__html: hero.heroInformation.bioFields.story}}></span>
            </div>
          </div>
        </div>        
      </Suspense>
    </main>
  );
}