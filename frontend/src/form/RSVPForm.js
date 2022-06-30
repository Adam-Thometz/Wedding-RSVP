import React, { useState, useEffect } from 'react';
import GuestContext from '../_utils/GuestContext';
import Api from '../api';

import './RSVPForm.css';

import NameZipcode from './form-components/NameZipcode';
import Response from './form-components/Response';
import GuestInfo from './form-components/GuestInfo';
import IsAttending from './messages/IsAttending';

const RSVPForm = () => {
  const [page, setPage] = useState(0);
  const [message, setMessage] = useState(null);

  const [guestInfo, setGuestInfo] = useState({
    firstName: '',
    lastName: '',
    zipcode: '',
    isComing: '',
    plusOne: '',
    diet: '',
    email: ''
  });
  
  useEffect(() => {
    async function addComingGuest() {
      const { email } = guestInfo;
      if (email) {
        await Api.markGuest({ guestInfo });
        setPage(3);
      };
    };
    if (page === 2) addComingGuest();
  }, [guestInfo, page]);

  const pages = [
    <NameZipcode  />,
    <Response />,
    <GuestInfo />,
    <IsAttending />
  ];

  return (
    <GuestContext.Provider value={{ guestInfo, setGuestInfo, setPage, setMessage }}>
      <form>
        {message ? message : pages[page]}
      </form>
    </GuestContext.Provider>
  );
};

export default RSVPForm;