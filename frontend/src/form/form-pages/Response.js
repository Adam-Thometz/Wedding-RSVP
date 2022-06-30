import React, { useState, useContext } from 'react';
import Api from '../../api';
import FormContext from '../../_utils/FormContext';
import IsNotAttending from '../messages/IsNotAttending';

const Response = () => {
  const { guestInfo, setGuestInfo, setMessage, setPage } = useContext(FormContext);
  const [isComing, setIsComing] = useState('');

  const handleSetIsComing = e => setIsComing(e.target.value);

  const nextPage = async e => {
    e.preventDefault();
    setGuestInfo(guest => ({ ...guest, isComing }));
    if (isComing === 'yes') {
      setPage(2)
    } else {
      setMessage(<IsNotAttending />);
      await Api.markNotComing({ ...guestInfo, isComing });
    }
  };
  const prevPage = () => setPage(0);

  return (
    <div className='Response'>
      <p>Hi {guestInfo.firstName}! Great to see you here! Now, do you plan to come?</p>
      <label htmlFor='yes'>Yes</label>
      <input
        type='radio'
        id='yes'
        name='response'
        value='yes'
        onChange={handleSetIsComing}
      />
      <label htmlFor='no'>No</label>
      <input
        type='radio'
        id='no'
        name='response'
        value='no'
        onChange={handleSetIsComing}
      />
      <button onClick={nextPage} disabled={isComing === ''}>Next</button>
      <button onClick={prevPage}>Back</button>
    </div>
  );
};

export default Response;