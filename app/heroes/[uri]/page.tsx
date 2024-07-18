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

interface HeroInformation {
  bioFields: BioFields;
  abilityFields: AbilityFields;
  portrait: ArtNode;
  illustration: ArtNode;
  illustration2: ArtNode;
  background: ArtNode;
  // Add other fields as needed
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
    <main className="h-screen overflow-hidden bg-cover bg-no-repeat bg-center after:bg-black after:opacity-95 after:absolute after:inset-0" style={{backgroundImage: `url(${hero.heroInformation.background.node.sourceUrl ?? ""})`}}>
      <Suspense fallback={<Loading />}>
        <div className="p-8 hero-buttons w-full text-xl relative overflow-hidden flex gap-8 mb-8 z-10">
          <span className="p-8 text-center cursor-pointer hover:bg-gray-700 hover:text-white font-bold w-full card bg-gray-700 text-white">Bio</span>
          <span className="p-8 text-center cursor-pointer hover:bg-gray-700 hover:text-white font-bold w-full card bg-gray-800 text-gray-400">Abilities</span>          
          <span className="p-8 text-center cursor-pointer hover:bg-gray-700 hover:text-white font-bold w-full card bg-gray-800 text-gray-400">Build</span>
          <span className="p-8 text-center cursor-pointer hover:bg-gray-700 hover:text-white font-bold w-full card bg-gray-800 text-gray-400">Review</span>
          <span className="p-8 text-center cursor-pointer hover:bg-gray-700 hover:text-white font-bold w-full card bg-gray-800 text-gray-400">Teams</span>
          <span className="p-8 text-center cursor-pointer hover:bg-gray-700 hover:text-white font-bold w-full card bg-gray-800 text-gray-400">Costumes</span>   
          <span className="p-8 text-center cursor-pointer hover:bg-gray-700 hover:text-white font-bold w-full card bg-gray-800 text-gray-400">Gallery</span>          
        </div>
        <div className="relative overflow-hidden z-10 w-full h-full items-start flex px-8">          
          <div className="px-8 w-1/3">
            <h2 className="text-2xl font-medium uppercase tracking-widest mb-0">{hero.title.replace(hero.heroInformation.bioFields.name, '').trim()}</h2>
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
            <div className="">
              <div className="pt-8 flex flex-col gap-8 justify-between w-full text-sm">
                <div className="w-full"><span className="w-1/2 inline-block font-bold">Name</span><span className="w-1/2 inline-block text-right">{hero.heroInformation.bioFields.name}</span></div>
                <div className="w-full"><span className="w-1/2 inline-block font-bold">Released</span><span className="w-1/2 inline-block text-right">{formatDate(hero.heroInformation.bioFields.naReleaseDate)}</span></div>
                <div className="w-full"><span className="w-1/2 inline-block font-bold">Age</span><span className="w-1/2 inline-block text-right">{hero.heroInformation.bioFields.age}</span></div>
                <div className="w-full"><span className="w-1/2 inline-block font-bold">Height</span><span className="w-1/2 inline-block text-right">{hero.heroInformation.bioFields.height}</span></div>
                <div className="w-full"><span className="w-1/2 inline-block font-bold">Weight</span><span className="w-1/2 inline-block text-right">{hero.heroInformation.bioFields.weight}</span></div>
                <div className="w-full"><span className="w-1/2 inline-block font-bold">Species</span><span className="w-1/2 inline-block text-right">{hero.heroInformation.bioFields.species}</span></div>
                <div className="w-full"><span className="w-1/2 inline-block font-bold">Equipment</span><span className="w-1/2 inline-block text-right">{hero.heroInformation.bioFields.compatibleEquipment.map((equipment) => (<span className="ml-2" key={"eq-" + equipment}>{equipment}</span>))}</span></div>
              </div>
            </div>
          </div>
          <div className={"w-1/3 h-full px-8"}>
            <FadeInImage src={hero.heroInformation.illustration?.node.sourceUrl ?? ""} width={500} height={300} priority={true} className="object-contain w-full h-full" quality={100} alt={hero.heroInformation.illustration?.node.title ?? ""} />
          </div>
          <div className="w-1/3 h-[calc(100%-16rem)] overflow-y-scroll px-8">
            <span className="w-full h-full overflow-y-scroll text-sm" dangerouslySetInnerHTML={{__html: hero.heroInformation.bioFields.story}}></span>
          </div>
        </div>        
      </Suspense>
    </main>
  );
}