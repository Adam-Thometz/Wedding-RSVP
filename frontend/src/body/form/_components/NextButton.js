import React from 'react'

import './NextButton.css';

const NextButton = ({ onClick, disabled }) => (
  <button className='NextButton' onClick={onClick} disabled={disabled}>Next</button>
);

export default NextButton;