import React from 'react';
import { password } from '../../_utils/password';
import useTextbox from '../../_utils/useTextbox';
import NextButton from '../form/_components/NextButton';

import TextFormGroup from '../form/_components/TextFormGroup';

const Password = ({ setShowGuestList }) => {
  const [formData, setFormData] = useTextbox({ password: '' });
  
  const checkPassword = e => {
    const getPassword = e => e.target.previousSibling.children[0].value;

    const input = getPassword(e);
    if (input === password) setShowGuestList(true);
  };


  return (
    <div className='Password'>
      <TextFormGroup
        labelText='Enter password to see guest list'
        id='password'
        name='password'
        value={formData.password}
        onChange={setFormData}
        required
      />
      <NextButton onClick={checkPassword} />
    </div>
  );
};

export default Password;