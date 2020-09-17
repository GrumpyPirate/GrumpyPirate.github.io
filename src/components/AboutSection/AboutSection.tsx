import React, { FunctionComponent } from 'react';

import Heading from 'components/Typography/Heading/Heading';

import classes from './AboutSection.scss';
import { AboutSectionProps } from './AboutSection.types';

const AboutSection: FunctionComponent<AboutSectionProps> = ({ title, children }) => (
  <div className={classes['about__section']}>
    <Heading level={2} displayLevel={3} text={title} className={classes['about__section__title']} />
    {children}
  </div>
);

export default AboutSection;
