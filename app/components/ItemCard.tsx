import FadeInImage from "#/app/components/FadeInImage";
import StatFormatter from "#/app/components/StatFormatter";
import { Hero, Item } from "#/graphql/generated/types";

interface ItemCardProps {
  index: number;
  selectedItem?: number;
  hero?: Hero;
  item: Item | undefined;
  element: string | undefined;
}

export default function ItemCard({
  index,
  selectedItem,
  hero,
  item,
  element,
}: ItemCardProps) {
  return (
    <div className="w-full h-full">
      <div className="flex">
        <div className={`w-24 ${selectedItem === index || selectedItem === 9999 ? 'mb-4' : 'mb-0'}`}>
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
        <div className="w-full pl-4">
          <h3 className="text-xs 3xl:text-sm font-bold">{item?.title ?? ""}</h3>
          <h2 className="text-xs 3xl:text-sm tracking-wide text-green-500">{item?.itemInformation?.rarity + " " + item?.weapons?.weaponType ?? ""}</h2>
          <h2
            className={`${
              selectedItem === index || selectedItem === 9999 ? "mb-2" : "mb-0"
            } text-4xl 3xl:text-4xl font-medium font-oswald`}
          >
            {item?.weapons?.minDps ?? "?"}-{item?.weapons?.maxDps ?? "?"}
            <span className="text-lg ml-1">DPS</span>
          </h2>
        </div>
      </div>
      <div
        className={`flex flex-col gap-1 overflow-hidden ${
          selectedItem === index || selectedItem === 9999 ? "h-auto" : "h-0"
        } text-xs 3xl:text-sm 4xl:text-base`}
      >
        {item?.equipmentOptions?.mainStats
          ? item.equipmentOptions.mainStats.map((stat, index) => (
              <StatFormatter
                key={item.id + "-main-stat-" + index}
                statName={stat?.stat + ""}
                element={element?.toLowerCase()}
                isRange={stat?.isRange || false}
                statValue={stat?.value + ""}
                minValue={stat?.minValue + ""}
                maxValue={stat?.maxValue + ""}
                isPassive={false}
              />
            ))
          : null}
        {hero && item?.weapons?.exclusiveEffects && (
          <div className="text-gray-400 mt-4">
            <span className="block">[{hero?.title} only]</span>
            <span
              className="w-full block text-wrap whitespace-normal"
              dangerouslySetInnerHTML={{
                __html: item?.weapons?.exclusiveEffects
                  .replace(/(\r\n|\r|\n){2,}/g, "\n")
                  .replace(/<br\s*\/?>/gi, "\n"),
              }}
            ></span>
          </div>
        )}
        {item?.equipmentOptions?.lb5Option && (
          <div className="text-gray-400 mt-4">
            <span className="block">[Required Limit Break 5]</span>
            {item?.equipmentOptions?.lb5Option && (
              <StatFormatter
                statName={item.equipmentOptions?.lb5Option + ""}
                element={element + ""}
                statValue={`${item.equipmentOptions?.lb5Value + ""}`}
                isPassive={false}
              />
            )}
          </div>
        )}
        {item?.equipmentOptions?.subStats && (
          <div className="mt-4">
            <span className="w-full flex justify-between">
              <span>[Sub-Option]</span>
              <span>0 to {item.equipmentOptions.maxSubOptionLines} abilities granted</span>
            </span>
            {item.equipmentOptions.subStats.map((stat, index) => (
              <StatFormatter
                key={item.id + "-sub-stat-" + index}
                statName={stat?.stat + ""}
                element={element?.toLowerCase()}
                isRange={stat?.isRange || false}
                statValue={stat?.value + ""}
                minValue={stat?.minValue + ""}
                maxValue={stat?.maxValue + ""}
                isPassive={false}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
