import FadeInImage from "#/app/components/FadeInImage";
import StatFormatter from "#/app/components/StatFormatter";
import { Hero, Item } from "#/graphql/generated/types";

interface ItemCostumeCardProps {
  index: number;
  selectedWeapon?: number;
  hero?: Hero;
  item: Item | undefined;
  element: string | undefined;
}

export default function ItemCostumeCard({
  index,
  selectedWeapon,
  hero,
  item,
  element,
}: ItemCostumeCardProps) {

  return (
    <div className="w-full h-full">
      <div className="w-full flex flex-col gap-4 justify-center items-center">
        <div className="w-full">
          <FadeInImage
            src={
              item?.featuredImage?.node?.sourceUrl ??
              "https://api.heavenhold.com/wp-content/uploads/2020/08/1starf-150x150.jpg"
            }
            className="w-full h-auto aspect-square object-contain"
            width={300}
            height={300}
            alt={item?.title ?? ""}
          />
        </div>
        <div className="w-full text-center">
          <h3 className="text-sm 3xl:text-lg font-bold">{item?.title ?? ""}</h3>          
        </div>
      </div>      
    </div>
  );
}
