"use client";

import React, { useState } from 'react';
import FadeInImage from './FadeInImage';

// Define the props interface
interface FadeInImageProps extends ImageProps {
  maxHeight?: boolean;
  setWidth?: number;
}

const FadeInImage: React.FC<FadeInImageProps> = ({ maxHeight = false, setWidth = 0, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`fade-in ${isLoaded ? 'loaded' : ''} ${maxHeight ? 'h-full' : ''} ${setWidth > 0 ? `w-[calc(${setWidth}px)]` : ''}`}>
      <Image
        {...props}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default FadeInImage;