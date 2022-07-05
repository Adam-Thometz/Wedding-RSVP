import React, { useContext, useState } from 'react';
import useTextbox from '../../../_utils/useTextbox';
import FormContext from '../../../_utils/FormContext';

import './MiscInfo.css';

import Guest from '../../../_utils/guest';
import BackButton from '../_components/BackButton';
import NextButton from '../_components/NextButton';

const MiscInfo = () => {
  const { guestInfo, setGuestInfo, setPage } = useContext(FormContext);
  const [hasPlusOne, setHasPlusOne] = useState(false);
  const [formData, setFormData] = useTextbox({
    plusOne: '',
    diet: '',
    email: ''
  });

  const handlePlusOne = e => {
    const answer = e.target.value === 'yes' ? true : false;
    setHasPlusOne(answer);
    if (answer === false && formData.plusOne !== '') {
      const resetPlusOne = { target: { name: 'plusOne', value: ''} };
      setFormData(resetPlusOne);
    };
  };

  const goBack = () => setPage(1);

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
        <p>Would you like to <b>bring a plus-one?</b></p>
        <label htmlFor='yes'>Yes!</label>
        <input type='radio' id='yes' name='plusOne' value='yes' onChange={handlePlusOne} />
        <label htmlFor='no'>No, just me :-)</label>
        <input type='radio' id='no' name='plusOne' value='no' onChange={handlePlusOne} />
        {hasPlusOne ? (<>
          <label htmlFor=''>What is their name? Enter their full name in case they might be on the guest list too!</label>
          <input type='text' id='plusOne' name='plusOne' value={formData.plusOne} onChange={setFormData} />
        </>) : null}
      </div>

      <div className='MiscInfo-diet'>
        <label htmlFor='diet'>Please inform us of any <b>dietary restrictions</b> so we can provide the best and safest catering possible! If none, just leave blank. </label>
        <input type='text' id='diet' name='diet' value={formData.diet} onChange={setFormData} />
      </div>

      <div className='MiscInfo-email'>
        <p>Lastly, enter your <b>email</b> so we can send you updates if necessary and, of course, give you access to photos of the whole shindig after!</p>
        <label htmlFor='email'>Email: </label>
        <input required type='email' id='email' name='email' value={formData.email} onChange={setFormData} />
      </div>

      <BackButton />
      <NextButton onClick={handleSetGuestInfo} disabled={formData.email === ''} />
    </div>
  );
};

export default MiscInfo;