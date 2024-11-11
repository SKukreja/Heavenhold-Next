"use client";

import { Hero } from "#/graphql/generated/types";
import FadeInImage from "#/app/components/FadeInImage";

interface GalleryProps {
  hero: Hero;
}

const mosaicImageStyles = "w-[calc(100%-2rem)] lg:w-[calc((100%/3)-2rem)] flex flex-col justify-center gap-4"

function Gallery({ hero }: GalleryProps) {
  const portraits = hero.heroInformation?.portrait ?? [];
  const illustrations = hero.heroInformation?.illustrations ?? [];
  const background = hero.heroInformation?.background;

  return (
    <div
      id="Gallery"
      className="relative overflow-visible z-20 pt-8 mt-8 lg:pt-0 w-full h-[calc(100vhrem)] items-start flex flex-col text-xs 2xl:text-sm 3xl:text-base 4xl:text-lg px-8"
    >
      <div className="w-full justify-start h-[calc(100%-8rem)]">
        <div className="w-full h-auto lg:h-full lg:overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-gray-1100 scrollbar-w-2">
          <div className="w-[calc(100%+2rem)] h-auto lg:h-full p-[2px] lg:overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-gray-1100 scrollbar-w-2 flex mb-8 gap-8 flex-wrap">
            {/* Render Portraits */}
            {portraits.length > 0 &&
              portraits.map((image, index) => (
                <div key={"portrait-"+index} className={mosaicImageStyles}>
                  <FadeInImage src={image?.art?.node.sourceUrl ?? ""} width={500} height={500} className="w-full h-auto" alt={image?.title || "Portrait"} />
                  <div className="caption text-center mt-2">Portrait - {image?.title}</div>
                </div>
              ))}
            {/* Render Backgrounds */}
            {background &&              
                <div key={'background'} className={mosaicImageStyles}>
                    <FadeInImage src={background.node.sourceUrl ?? ""} width={500} height={500} className="w-full h-auto" alt={background.node.altText || "Background"} />
                    <div className="caption text-center mt-2">Background</div>
                </div>
            }            
            {/* Render Illustrations */}
            {illustrations.length > 0 &&
              illustrations.map((image, index) => (
                <div key={'illustration-'+index} className={mosaicImageStyles}>
                  <FadeInImage src={image?.image?.node.sourceUrl ?? ""} width={500} height={500} className="w-full h-auto" alt={image?.name || "Illustration"} />
                  <div className="caption text-center mt-2">Illustration - {image?.name}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
