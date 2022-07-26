import React, { useContext } from 'react';
import useTextbox from '../../../_utils/useTextbox';
import FormContext from '../../../_utils/FormContext';

import './Email.css';

import TextFormGroup from '../_components/TextFormGroup';
import BackButton from '../_components/BackButton';
import NextButton from '../_components/NextButton';

import Guest from '../../../_utils/guest';

const Email = () => {
  const { guestInfo, setGuestInfo, setPage } = useContext(FormContext);
  const [formData, setFormData] = useTextbox({ email: '' });

  const handleSetGuestInfo = async e => {
    e.preventDefault();
    const updatedGuest = { ...guestInfo, ...formData };
    await Guest.markComing(updatedGuest);
    setGuestInfo(updatedGuest);
    setPage(5);
  };
  
  return (
    <div className='Email'>
      <h3>One last thing!</h3>
      <p className='Email-info'>Enter your email so we can send you updates, if any, and give you access to photos afterwards!</p>
      <TextFormGroup required labelText='Email' id='email' name='email' value={formData.email} onChange={setFormData} />


      <div className='Email-buttons'>
        <BackButton />
        <NextButton onClick={handleSetGuestInfo} disabled={formData.email === ''} />
      </div>
    </div>
  );
};

export default Email;