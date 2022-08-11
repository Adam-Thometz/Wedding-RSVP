import React, { useContext, useState } from 'react';
import useTextbox from '../../../_utils/useTextbox';
import FormContext from '../../../_utils/FormContext';

import './PlusOne.css';

import BackButton from '../_components/BackButton';
import NextButton from '../_components/NextButton';
import Option from '../_components/Option';
import TextFormGroup from '../_components/TextFormGroup';

const PlusOne = () => {
  const { guestInfo, setGuestInfo, setPage } = useContext(FormContext);
  const [hasPlusOne, setHasPlusOne] = useState('');
  const [formData, setFormData] = useTextbox({ plusOne: '' });

  const handlePlusOne = e => {
    const answer = e.currentTarget.id;
    setHasPlusOne(answer);
    if (answer === 'no' && formData.plusOne !== '') {
      const resetPlusOne = { target: { name: 'plusOne', value: ''} };
      setFormData(resetPlusOne);
    };
  };

  const handleSetGuestInfo = e => {
    e.preventDefault();
    const updatedGuest = { ...guestInfo, ...formData };
    setGuestInfo(updatedGuest);
    setPage(3);
  };

  const disabled = hasPlusOne === '' || (hasPlusOne === 'yes' && formData.plusOne === '');

  return (
    <div className='PlusOne'>
      <h3>Awesome!</h3>
      <p className='PlusOne-info'>Before you finish, we just need a bit more information. Are you bringing a plus-one?</p>
      <div className='PlusOne-options'>
        <Option id='no' text="No" onClick={handlePlusOne} selected={hasPlusOne === 'no'} />
        <Option id='yes' text="Yes" onClick={handlePlusOne} selected={hasPlusOne === 'yes'} />
      </div>
      {hasPlusOne === 'yes' ? (<>
        <p className='PlusOne-name'>Enter their first and last name if you think they're already on the guest list so we can mark them too.</p>
        <TextFormGroup required labelText='Name of plus-one' id='plusOne' name='plusOne' value={formData.plusOne} onChange={setFormData} />
      </>) : null}

      <div className='PlusOne-buttons'>
        <NextButton onClick={handleSetGuestInfo} disabled={disabled} />
        <BackButton />
      </div>
    </div>
  );
};

export default PlusOne;