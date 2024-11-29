"use client";

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';

// Define the props interface
interface FadeInImageProps extends ImageProps {
  maxHeight?: boolean;
  setWidth?: number;
  withLightbox?: boolean; // New prop to enable lightbox
}

const FadeInImage: React.FC<FadeInImageProps> = ({
  maxHeight = false,
  setWidth = 0,
  withLightbox = false,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Function to handle image click
  const handleImageClick = () => {
    if (withLightbox) {
      setIsLightboxOpen(true);
    }
  };

  // Function to close lightbox
  const handleLightboxClose = () => {
    setIsLightboxOpen(false);
  };

  return (
    <>
      <div
        className={`fade-in select-none ${isLoaded ? 'loaded' : ''} ${
          maxHeight ? 'h-full' : ''
        } ${setWidth > 0 ? `w-[calc(${setWidth}px)]` : ''}`}
      >
        <Image
          {...props}
          onLoad={() => setIsLoaded(true)}
          onClick={handleImageClick} // Add click handler
        />
      </div>

      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black bg-opacity-90"
          onClick={handleLightboxClose}
        >
          <div className="relative z-100 w-full h-full">
            <Image
              src={props.src}
              alt={props.alt}
              className="pointer-events-none"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default FadeInImage;
