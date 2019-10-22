import React from 'react';
import PropTypes from 'prop-types';

import Heading from 'components/Typography/Heading/Heading.component';

import classes from './AboutSection.component.scss';

const AboutSection = ({ title, children }) => (
  <div className={classes['about__section']}>
    <Heading level={2} displayLevel={3} text={title} className={classes['about__section__title']} />
    {children}
  </div>
);

AboutSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default AboutSection;
