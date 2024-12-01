"use client";

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Image, { ImageProps } from "next/image";

interface FadeInImageProps extends ImageProps {
  maxHeight?: boolean;
  setWidth?: number;
  withLightbox?: boolean;
}

const FadeInImage: React.FC<FadeInImageProps> = ({
  maxHeight = false,
  setWidth = 0,
  withLightbox = false,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  const handleImageClick = () => {
    if (withLightbox) {
      setCurrentImage(props.src as string); // Set the clicked image's src
      setIsLightboxOpen(true);
    }
  };

  const handleLightboxClose = () => {
    setIsLightboxOpen(false);
    setCurrentImage(null);
  };

  useEffect(() => {
    let portalDiv = document.getElementById("portal-root");
    if (!portalDiv) {
      portalDiv = document.createElement("div");
      portalDiv.id = "portal-root";
      document.body.appendChild(portalDiv);
    }
    setPortalElement(portalDiv);
  }, []);

  const lightboxContent = isLightboxOpen && currentImage && (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-90"
      onClick={handleLightboxClose}
    >
      <div className="relative w-full h-full cursor-pointer">
        <Image
          src={currentImage}
          alt={props.alt}
          className="pointer-events-none"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );

  return (
    <>
      <div
        className={`fade-in select-none ${isLoaded ? "loaded" : ""} ${
          maxHeight ? "h-full" : ""
        } ${setWidth > 0 ? `w-[calc(${setWidth}px)]` : ""} ${
          withLightbox ? "cursor-pointer" : ""
        }`}
      >
        <Image {...props} onLoad={() => setIsLoaded(true)} onClick={handleImageClick} />
      </div>

      {portalElement && ReactDOM.createPortal(lightboxContent, portalElement)}
    </>
  );
};

export default FadeInImage;
