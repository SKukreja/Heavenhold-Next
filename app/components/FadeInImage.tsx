"use client";

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';

const FadeInImage = (props: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`fade-in ${isLoaded ? 'loaded' : ''}`}>
      <Image
        {...props}
        onLoadingComplete={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default FadeInImage;
