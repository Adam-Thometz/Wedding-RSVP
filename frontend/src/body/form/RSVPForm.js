import React, { useState } from 'react';
import FormContext from '../../_utils/FormContext';

import './RSVPForm.css';

import NameZipcode from './form-pages/NameZipcode';
import Response from './form-pages/Response';
import PlusOne from './form-pages/PlusOne';
import IsAttending from './messages/IsAttending';

import feather from '../../_icons/feather.png';
import Diet from './form-pages/Diet';
import Email from './form-pages/Email';

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
    <PlusOne />,
    <Diet />,
    <Email />,
    <IsAttending />
  ];

  return (
    <FormContext.Provider value={{ guestInfo, setGuestInfo, setPage, setMessage }}>
      <form>
        {window.innerWidth >= 1275 ? <img src={feather} alt='' /> : null}
        {message ? message : pages[page]}
        {window.innerWidth >= 1275 ? <img src={feather} alt='' /> : null}
      </form>
    </FormContext.Provider>
  );
};

export default RSVPForm;