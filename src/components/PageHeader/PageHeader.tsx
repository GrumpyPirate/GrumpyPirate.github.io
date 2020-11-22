import React, { FunctionComponent, useCallback, useRef } from 'react';

import { Container } from 'components/Grid';
import Icon from 'components/Icon/Icon';

import {
  Content,
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

  const onScrollDownClick = useCallback(() => {
    if (headerElement && headerElement.current) {
      window.scrollTo({
        top: headerElement.current.offsetHeight,
        behavior: 'smooth',
      });
    }
  }, []);

  return (
    <Header className={className} isFullscreen={isFullscreen} ref={headerElement}>
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
