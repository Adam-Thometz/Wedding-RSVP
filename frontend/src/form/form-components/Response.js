import React, { useState, useContext } from 'react';
import GuestContext from '../../_utils/GuestContext';

const Response = ({ setPage }) => {
  const { guestInfo, setIsComing } = useContext(GuestContext);
  const [answer, setAnswer] = useState(null);

  const handleSetAnswer = e => setAnswer(e.target.value);

  const nextPage = () => setIsComing(answer);
  const prevPage = () => setPage(0);

  return (
    <div className='RSVPForm-response'>
      <p>Hi {guestInfo.firstName}! Great to see you here! Now, do you plan to come?</p>
      <label htmlFor='yes'>Yes</label>
      <input
        type='radio'
        id='yes'
        name='response'
        value={true}
        onChange={handleSetAnswer}
      />
      <label htmlFor='no'>No</label>
      <input
        type='radio'
        id='no'
        name='response'
        value={false}
        onChange={handleSetAnswer}
      />
      <button onClick={nextPage} disabled={answer === null}>Next</button>
      <button onClick={prevPage}>Back</button>
    </div>
  );
};

export default Response;