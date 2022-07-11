import React, { useContext, useState } from 'react';
import useTextbox from '../../../_utils/useTextbox';
import FormContext from '../../../_utils/FormContext';

import './MiscInfo.css';

import Guest from '../../../_utils/guest';
import BackButton from '../_components/BackButton';
import NextButton from '../_components/NextButton';
import Option from '../_components/Option';
import TextFormGroup from '../_components/TextFormGroup';

const MiscInfo = () => {
  const { guestInfo, setGuestInfo, setPage } = useContext(FormContext);
  const [hasPlusOne, setHasPlusOne] = useState('');
  const [formData, setFormData] = useTextbox({
    plusOne: '',
    diet: '',
    email: ''
  });

  const handlePlusOne = e => {
    const answer = e.currentTarget.id;
    setHasPlusOne(answer);
    if (answer === 'no' && formData.plusOne !== '') {
      const resetPlusOne = { target: { name: 'plusOne', value: ''} };
      setFormData(resetPlusOne);
    };
  };

  const handleSetGuestInfo = async e => {
    e.preventDefault();
    const updatedGuest = { ...guestInfo, ...formData };
    await Guest.markComing(updatedGuest);
    setGuestInfo(updatedGuest);
    setPage(3);
  };

  return (
    <div className='MiscInfo'>
      <p>Awesome! Before you finish, we just need a bit more information.</p>

      <div className='MiscInfo-plus-one'>
        <p>Are you bringing a plus-one?</p>
        <div className='MiscInfo-plus-one-options'>
          <Option id='yes' text="Yes!" onClick={handlePlusOne} selected={hasPlusOne === 'yes'} />
          <Option id='no' text="Nope. Just me :)" onClick={handlePlusOne} selected={hasPlusOne === 'no'} />
        </div>
        {hasPlusOne === 'yes' ? (<>
          <p className='MiscInfo-plus-one-info'>Enter their first and last name in case they're already on the guest list.</p>
          <TextFormGroup required labelText='Name of plus-one' id='plusOne' name='plusOne' value={formData.plusOne} onChange={setFormData} />
        </>) : null}
      </div>

      <div className='MiscInfo-diet'>
        <p>Enter any dietary restrictions for catering. If none, type 'N/A'. </p>
        <TextFormGroup required labelText='Diet restrictions' id='diet' name='diet' value={formData.diet} onChange={setFormData} />
      </div>

      <div className='MiscInfo-email'>
        <p>Enter your email so we can send you updates, if any, and give you access to photos!</p>
        <TextFormGroup required labelText='Email' id='email' name='email' value={formData.email} onChange={setFormData} />
      </div>

      <div className='MiscInfo-buttons'>
        <BackButton />
        <NextButton onClick={handleSetGuestInfo} disabled={formData.email === ''} />
      </div>
    </div>
  );
};

export default MiscInfo;