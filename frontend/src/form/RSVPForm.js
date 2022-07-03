import React, { useState } from 'react';
import FormContext from '../_utils/FormContext';

import './RSVPForm.css';

import NameZipcode from './form-pages/NameZipcode';
import Response from './form-pages/Response';
import MiscInfo from './form-pages/MiscInfo';
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
  
  const pages = [
    <NameZipcode  />,
    <Response />,
    <MiscInfo />,
    <IsAttending />
  ];

  return (
    <FormContext.Provider value={{ guestInfo, setGuestInfo, setPage, setMessage }}>
      <form>
        {message ? message : pages[page]}
      </form>
    </FormContext.Provider>
  );
};

export default RSVPForm;