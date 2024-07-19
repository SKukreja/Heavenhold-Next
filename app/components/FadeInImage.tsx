"use client";

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';

const FadeInImage = (props: ImageProps, maxHeight: boolean) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`fade-in ${isLoaded ? 'loaded' : ''} ${maxHeight ? "h-full" : ""}`}>
      <Image
        {...props}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default FadeInImage;
