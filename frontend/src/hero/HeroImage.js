import React from 'react';

import './HeroImage.css';

const HeroImage = ({ children }) => {
  return (
    <header>
      {children}
    </header>
  );
};

export default HeroImage;