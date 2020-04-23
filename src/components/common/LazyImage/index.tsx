import React, { useState, useEffect } from 'react';

export type LazyImageProps = {
  src: string,
  alt?: string,
  width?: number,
  height?: number
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  width = 300,
  height = 200,
  alt
}) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.addEventListener('load', () => setLoaded(true));
    img.src = src;
  }, []);

  if (!loaded) {
    return <p>loading</p>
  }

  return <img src={src} alt={alt}/>;
}

export default LazyImage;