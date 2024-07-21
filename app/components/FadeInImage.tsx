"use client";

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';

// Define the props interface
interface FadeInImageProps extends ImageProps {
  maxHeight?: boolean;
}

const FadeInImage: React.FC<FadeInImageProps> = ({ maxHeight = false, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`fade-in ${isLoaded ? 'loaded' : ''} ${maxHeight ? 'h-full' : ''}`}>
      <Image
        {...props}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default FadeInImage;