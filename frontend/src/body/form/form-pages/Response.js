import React, { useState, useContext } from 'react';
import FormContext from '../../../_utils/FormContext';

import './Response.css'

import IsNotAttending from '../messages/IsNotAttending';

import Guest from '../../../_utils/guest';
import NextButton from '../_components/NextButton';
import BackButton from '../_components/BackButton';
import Option from '../_components/Option';

const Response = () => {
  const { guestInfo, setGuestInfo, setMessage, setPage } = useContext(FormContext);
  const [isComing, setIsComing] = useState('');

  const handleSetIsComing = e => {
    // debugger;
    setIsComing(e.currentTarget.id);
  };

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
      <div className='Response-options'>
        <Option id='yes' text="Yes, I'll be there!" onClick={handleSetIsComing} selected={isComing === 'yes'} />
        <Option id='no' text="No, I won't be able to make it" onClick={handleSetIsComing} selected={isComing === 'no'} />
      </div>
      <div className='Response-buttons'>
        <BackButton />
        <NextButton onClick={nextPage} disabled={isComing === ''} />
      </div>
    </div>
  );
};

export default Response;