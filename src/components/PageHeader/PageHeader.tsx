import debounce from 'lodash/debounce';
import React, { FunctionComponent, useCallback, useEffect, useRef, useState } from 'react';

import { Container } from 'components/Grid';
import Icon from 'components/Icon/Icon';

import {
  Content,
  getFullscreenHeight,
  Header,
  ScrollButton,
  ScrollButtonIcon,
  ScrollButtonLabel,
  Title,
  TitleText,
} from './PageHeader.constants';
import { PageHeaderProps } from './PageHeader.types';

const PageHeader: FunctionComponent<PageHeaderProps> = ({
  children,
  className,
  isFullscreen = false,
  scrollLabel = 'Scroll for more',
  title,
}) => {
  const headerElement = useRef<HTMLElement>(null);
  const [height, setHeight] = useState(getFullscreenHeight());

  const onResize = debounce(() => {
    setHeight(getFullscreenHeight());
  }, 300);

  const onScrollDownClick = useCallback(() => {
    if (headerElement && headerElement.current) {
      window.scrollTo({
        top: headerElement.current.offsetHeight,
        behavior: 'smooth',
      });
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', onResize);
    onResize();

    return () => {
      window.removeEventListener('resize', onResize);
    };
  });

  return (
    <Header
      className={className}
      isFullscreen={isFullscreen}
      style={{ ...(isFullscreen && { height }) }}
      ref={headerElement}
    >
      <Container>
        <Content>
          <Title>
            <TitleText>{title}</TitleText>
          </Title>

          {children}
        </Content>
      </Container>

      {isFullscreen && (
        <ScrollButton type="button" onClick={onScrollDownClick}>
          <ScrollButtonLabel>{scrollLabel}</ScrollButtonLabel>
          <ScrollButtonIcon>
            <Icon glyph="chevron-down" />
          </ScrollButtonIcon>
        </ScrollButton>
      )}
    </Header>
  );
};

export default PageHeader;
