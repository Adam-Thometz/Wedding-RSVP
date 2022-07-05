import React, { useState, useContext } from 'react';
import FormContext from '../../../_utils/FormContext';

import './Response.css'

import IsNotAttending from '../messages/IsNotAttending';

import Guest from '../../../_utils/guest';
import NextButton from '../_components/NextButton';
import BackButton from '../_components/BackButton';

const Response = () => {
  const { guestInfo, setGuestInfo, setMessage, setPage } = useContext(FormContext);
  const [isComing, setIsComing] = useState('');

  const handleSetIsComing = e => setIsComing(e.target.value);

  const nextPage = async e => {
    e.preventDefault();
    setGuestInfo(guest => ({ ...guest, isComing }));
    if (isComing === 'yes') {
      setPage(2);
    } else {
      setMessage(<IsNotAttending />);
      await Guest.markNotComing({ ...guestInfo, isComing });
    };
  };

  return (
    <div className='Response'>
      <p>Hi {guestInfo.firstName}! Great to see you here! Now, do you plan to come?</p>
      <label htmlFor='yes'>Yes</label>
      <input
        className='Response-radio'
        type='radio'
        id='yes'
        name='response'
        value='yes'
        onChange={handleSetIsComing}
      />
      <label htmlFor='no'>No</label>
      <input
        className='Response-radio'
        type='radio'
        id='no'
        name='response'
        value='no'
        onChange={handleSetIsComing}
      />
      <NextButton onClick={nextPage} disabled={isComing === ''} />
      <BackButton />
    </div>
  );
};

export default Response;