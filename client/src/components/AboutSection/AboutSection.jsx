import React from 'react';
import PropTypes from 'prop-types';

import './AboutSection.scss';

const AboutSection = ({ title, children }) => (
  <div className="about__section">
    <h2 className="h3 about__section__title mb-3">{title}</h2>
    {children}
  </div>
);

AboutSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default AboutSection;
