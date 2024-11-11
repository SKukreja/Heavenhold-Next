import FadeInImage from "#/app/components/FadeInImage";
import StatFormatter from "#/app/components/StatFormatter";
import { Hero, Item } from "#/graphql/generated/types";

interface ItemCardProps {
  index: number;
  selectedWeapon?: number;
  hero?: Hero;
  item: Item | undefined;
  element: string | undefined;
}

export default function ItemCard({
  index,
  selectedWeapon,
  hero,
  item,
  element,
}: ItemCardProps) {
  const heroNode = hero as Hero || null

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
        <div className="w-[calc(100%-8rem)] pl-4 flex items-center">
          <h3 className="text-sm 3xl:text-lg font-bold">{item?.title ?? ""}</h3>
        </div>
      </div>    
    </div>
  );
}
