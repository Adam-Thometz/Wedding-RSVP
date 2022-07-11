import React from 'react';

import './Option.css';

const Option = ({ id, text, onClick, selected = false }) => {
  return (
    <div className={`Option${selected ? ` selected` : ''}`} onClick={onClick} id={id}>
      <p className='Option-text'>{text}</p>
    </div>
  );
};

export default Option;