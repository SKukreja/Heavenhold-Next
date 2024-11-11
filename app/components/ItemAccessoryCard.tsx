import FadeInImage from "#/app/components/FadeInImage";
import StatFormatter from "#/app/components/StatFormatter";
import { Hero, Item } from "#/graphql/generated/types";

interface ItemAccessoryCardProps {
  index: number;
  selectedItem?: number;
  hero?: Hero;
  item: Item | undefined;
  element: string | undefined;
}

export default function ItemAccessoryCard({
  index,
  selectedItem,
  hero,
  item,
  element,
}: ItemAccessoryCardProps) {  

  return (
    <div className="w-full h-full">
      <div className="flex">
        <div className="w-24 3xl:w-20">
          <FadeInImage
            src={
              item?.featuredImage?.node?.sourceUrl ??
              "https://api.heavenhold.com/wp-content/uploads/2020/08/1starf-150x150.jpg"
            }
            className="h-auto aspect-square object-contain"
            width={150}
            height={150}
            alt={item?.title ?? ""}
          />
        </div>
        <div className="w-[calc(100%-8rem)] pl-4">
          <h3 className="text-sm 3xl:text-lg font-bold">{item?.title ?? ""}</h3>
          <h2 className="text-sm tracking-wide text-green-500">{item?.itemInformation?.rarity + " " + item?.itemInformation?.itemType?.nodes[0].name}</h2>          
        </div>
      </div>
    </div>
  );
}
