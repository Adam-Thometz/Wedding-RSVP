import React, { useContext } from 'react'
import useTextbox from '../../../_utils/useTextbox';
import FormContext from '../../../_utils/FormContext';

import './Diet.css';

import TextFormGroup from '../_components/TextFormGroup';
import BackButton from '../_components/BackButton';
import NextButton from '../_components/NextButton';

const Diet = () => {
  const { guestInfo, setGuestInfo, setPage } = useContext(FormContext);
  const [formData, setFormData] = useTextbox({ diet: '' });

  const handleSetGuestInfo = e => {
    e.preventDefault();
    const updatedGuest = { ...guestInfo, ...formData };
    setGuestInfo(updatedGuest);
    setPage(4);
  };

  return (
    <div className='Diet'>
      <h3>Great! Two more things.</h3>
      <p className='Diet-info'>Please tell us your diet restrictions so we can plan catering with you in mind. If none, leave blank.</p>
      <TextFormGroup required labelText='Diet restrictions' id='diet' name='diet' value={formData.diet} onChange={setFormData} />

      <div className='Diet-buttons'>
        <BackButton />
        <NextButton onClick={handleSetGuestInfo} />
      </div>
    </div>
  );
};

export default Diet;