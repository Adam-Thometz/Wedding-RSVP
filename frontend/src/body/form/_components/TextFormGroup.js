import React from 'react';

import './TextFormGroup.css';

const TextFormGroup = ({ labelText, id, name, value, onChange, required }) => (
  <div className='TextFormGroup'>
    <input 
      className='TextFormGroup-input'
      type='text'
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
    />
    <label className='TextFormGroup-label' htmlFor={name}>{labelText}</label>
  </div>
);

export default TextFormGroup;