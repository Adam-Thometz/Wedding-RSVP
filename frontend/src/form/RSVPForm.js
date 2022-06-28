import React, { useState, useEffect } from 'react';
import GuestContext from '../_utils/GuestContext';
import Api from '../api';

import NameZipcode from './form-components/NameZipcode';
import GuestNotFound from './messages/GuestNotFound';
import Response from './form-components/Response';
import GuestInfo from './form-components/GuestInfo';
import IsAttending from './messages/IsAttending';
import IsNotAttending from './messages/IsNotAttending';

const RSVPForm = () => {
  const [page, setPage] = useState(0);
  const [message, setMessage] = useState(null);

  const [guestInfo, setGuestInfo] = useState({});
  const [isComing, setIsComing] = useState(null);
  const [plusOne, setPlusOne] = useState('');
  const [diet, setDiet] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    async function checkGuest() {
      debugger
      const isGuest = await Api.checkGuest(guestInfo);
      isGuest ? setPage(1) : setMessage(<GuestNotFound />);
    };

    if (Object.keys(guestInfo).length) checkGuest();
  }, [guestInfo]);
  
  useEffect(() => {
    async function checkIsComing() {
      if (isComing === true) {
        setPage(2);
      } else if (isComing === false) {
        setMessage(<IsNotAttending />);
        await Api.markGuest({ guestInfo, isComing });
      };
    };

    if (isComing !== null) checkIsComing();
  }, [guestInfo, isComing]);
  
  useEffect(() => {
    async function addComingGuest() {
      // TODO: Implement API to make this work
      await Api.markGuest({ guestInfo, isComing, plusOne, diet, email });
      setPage(3);
    }
    if (email.length) addComingGuest();
  }, [guestInfo, isComing, plusOne, diet, email]);

  const pages = [
    <NameZipcode  />,
    <Response setPage={setPage} />,
    <GuestInfo setPage={setPage} />,
    <IsAttending setPage={setPage} />
  ];

  return (
    <GuestContext.Provider value={{
      message, setMessage,
      guestInfo, setGuestInfo,
      isComing, setIsComing,
      plusOne, setPlusOne,
      diet, setDiet,
      email, setEmail
    }}>
      <form>
        {message ? message : pages[page]}
      </form>
    </GuestContext.Provider>
  );
};

export default RSVPForm;