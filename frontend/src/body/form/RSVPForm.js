import React, { useState } from 'react';
import FormContext from '../../_utils/FormContext';

import './RSVPForm.css';

import NameZipcode from './form-pages/NameZipcode';
import Response from './form-pages/Response';
import MiscInfo from './form-pages/MiscInfo';
import IsAttending from './messages/IsAttending';

import feather from '../../_icons/feather.png';

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
  
  const pages = [
    <NameZipcode  />,
    <Response />,
    <MiscInfo />,
    <IsAttending />
  ];

  return (
    <FormContext.Provider value={{ guestInfo, setGuestInfo, setPage, setMessage }}>
      <form>
        <img src={feather} alt='feather' />
        {message ? message : pages[page]}
        <img src={feather} alt='' />
      </form>
    </FormContext.Provider>
  );
};

export default RSVPForm;