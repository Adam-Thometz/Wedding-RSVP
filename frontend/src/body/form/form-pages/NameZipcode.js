import React, { useContext, useState } from 'react';
import useTextbox from '../../../_utils/useTextbox';
import FormContext from '../../../_utils/FormContext';

import './NameZipcode.css';

import GuestNotFound from '../messages/GuestNotFound';

import Guest from '../../../_utils/guest';
import NextButton from '../_components/NextButton';
import TextFormGroup from '../_components/TextFormGroup';

const NameZipcode = () => {
  const { setGuestInfo, setPage } = useContext(FormContext);
  const [notFound, setNotFound] = useState(false);
  const [formData, setFormData] = useTextbox({
    firstName: '',
    lastName: '',
    zipcode: ''
  });

  const nextPage = async e => {
    e.preventDefault();
    const guest = await Guest.checkGuest(formData);
    guest ? setPage(1) : setNotFound(true);
    setGuestInfo(guest => ({ ...guest, ...formData }));
  };

  return (
    <div className='NameZipcode'>
      <h3>Hello friend! Tell us who you are!</h3>
      <p className='NameZipcode-info'>Enter your first name, last name, and the zipcode where you received your invitation.</p>

      <div className='NameZipcode-name'>
        <TextFormGroup required labelText='First Name' id='firstName' name='firstName' value={formData.firstName} onChange={setFormData} width='40%' />
        <TextFormGroup required labelText='Last Name' id='lastName' name='lastName' value={formData.lastName} onChange={setFormData} width='55%' />
      </div>
      <TextFormGroup required labelText='Zipcode' id='zipcode' name='zipcode' value={formData.zipcode} onChange={setFormData} />

      <NextButton onClick={nextPage} />
      {notFound ? <GuestNotFound /> : null}
    </div>
  );
};

export default NameZipcode;