import React, { FunctionComponent, ImgHTMLAttributes, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

import { animDur, animEase } from 'styles';
import { ClassNameProps } from 'types/common';

const StyledImg = styled.img<{ isLoaded: boolean }>`
  opacity: 0;
  visibility: hidden;
  transition-property: visibility, opacity;
  transition-duration: ${animDur}s;
  transition-timing-function: ${animEase};

  ${({ isLoaded }) =>
    isLoaded &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`;

/**
 * Renders a Image component.
 *
 * @returns {ReactElement}
 */
const LoadableImage: FunctionComponent<ClassNameProps & ImgHTMLAttributes<{}>> = ({
  className,
  alt = '',
  ...rest
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isImageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (imgRef && imgRef.current && imgRef.current.complete) {
      setImageLoaded(true);
    }
  }, []);

  return (
    <StyledImg
      alt={alt}
      className={className}
      data-testid="loadable-image"
      isLoaded={isImageLoaded}
      loading="lazy"
      onLoad={() => {
        setImageLoaded(true);
      }}
      ref={imgRef}
      {...rest}
    />
  );
};

export default LoadableImage;
