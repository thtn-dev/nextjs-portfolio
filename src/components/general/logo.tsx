'use client';
import ImageWrapper from './image-wrapper';

function Logo() {
  return (
    <ImageWrapper
      src={`/logo-light.svg`}
      srcForDarkMode={`/logo-dark.svg`}
      alt='Logo'
      width={132}
      height={132}
    />
  );
}

export default Logo;
