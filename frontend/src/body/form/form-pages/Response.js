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
      <h3>Oh hi {guestInfo.firstName}!</h3>
      <p className='Response-info'>Great to see you here! Do you plan to come?</p>
      <div className='Response-options'>
        <Option id='no' text="No, I won't be able to make it" onClick={handleSetIsComing} selected={isComing === 'no'} />
        <Option id='yes' text="Yes, I'll be there!" onClick={handleSetIsComing} selected={isComing === 'yes'} />
      </div>
      <div className='Response-buttons'>
        <BackButton />
        <NextButton onClick={nextPage} disabled={isComing === ''} />
      </div>
    </div>
  );
};

export default Response;