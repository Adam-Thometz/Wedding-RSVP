import React, { useContext, useState } from 'react';
import useTextbox from '../../_hooks/useTextbox';
import FormContext from '../../_utils/FormContext';
import GuestNotFound from '../messages/GuestNotFound';
import Api from '../../api';

import './NameZipcode.css'

const NameZipcode = () => {
  const { setGuestInfo, setPage } = useContext(FormContext);
  const [error, setError] = useState(false)
  const [formData, setFormData] = useTextbox({
    firstName: '',
    lastName: '',
    zipcode: ''
  });

  const nextPage = async e => {
    e.preventDefault();
    const guest = await Api.checkGuest(formData);
    guest ? setPage(1) : setError(true);
    setGuestInfo(guest => ({ ...guest, ...formData }))
  };

  return (
    <div className='NameZipcode'>
      <p>Before we begin, please enter your first name, last name, and the zipcode where you received your invitation so we can find you on our guest list and weed out the wedding crashers!</p>
      <label htmlFor='firstName'>First Name: </label>
      <input
        type='text'
        id='firstName'
        name='firstName'
        value={formData.firstame}
        onChange={setFormData}
      />
      
      <label htmlFor='lastName'>Last Name: </label>
      <input
        type='text'
        id='lastName'
        name='lastName'
        value={formData.lastame}
        onChange={setFormData}
      />

      <label htmlFor='zipcode'>Zipcode: </label>
      <input
        type='text'
        id='zipcode'
        name='zipcode'
        value={formData.zipcode}
        onChange={setFormData}
      />
      <button onClick={nextPage}>Next</button>
      {error ? <GuestNotFound /> : null}
    </div>
  );
};

export default NameZipcode;