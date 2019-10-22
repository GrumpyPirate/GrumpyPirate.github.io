import React, { FunctionComponent } from 'react';

import Heading from 'components/Typography/Heading/Heading.component';

import { AboutSectionProps } from './AboutSection.component.d';
import classes from './AboutSection.component.scss';

const AboutSection: FunctionComponent<AboutSectionProps> = ({
  title,
  children,
}: AboutSectionProps) => (
  <div className={classes['about__section']}>
    <Heading level={2} displayLevel={3} text={title} className={classes['about__section__title']} />
    {children}
  </div>
);

export default AboutSection;
