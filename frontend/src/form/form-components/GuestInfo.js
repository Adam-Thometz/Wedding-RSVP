import React, { useContext, useState } from 'react';
import Api from '../../api';
import useTextbox from '../../_utils/useTextbox';
import FormContext from '../../_utils/FormContext';

const GuestInfo = () => {
  const { guestInfo, setGuestInfo, setPage } = useContext(FormContext);
  const [hasPlusOne, setHasPlusOne] = useState(false);
  const [formData, setFormData] = useTextbox({
    plusOne: '',
    diet: '',
    email: ''
  });

  const handlePlusOne = e => {
    const answer = e.target.value;
    setHasPlusOne(answer);
    if (answer === false && formData.plusOne !== '') {
      const resetPlusOne = { target: { name: 'plusOne', value: ''} };
      setFormData(resetPlusOne);
    };
  };

  const handleSetGuestInfo = async e => {
    e.preventDefault();
    const updatedGuest = { ...guestInfo, ...formData };
    await Api.markComing(updatedGuest);
    setGuestInfo(updatedGuest);
    setPage(3);
  };

  return (
    <div className='GuestInfo'>
      <p>Excellent! Before you finish, we just need a bit more information.</p>

      <div className='GuestInfo-plus-one'>
        <p>Would you like to bring a plus-one?</p>
        <label htmlFor='yes'>Yes</label>
        <input type='radio' id='yes' name='plusOne' value={true} onChange={handlePlusOne} />
        <label htmlFor='no'>No</label>
        <input type='radio' id='no' name='plusOne' value={false} onChange={handlePlusOne} />
        {hasPlusOne ? (<>
          <label htmlFor=''>What is their name?</label>
          <input type='text' id='plusOne' name='plusOne' value={formData.plusOne} onChange={setFormData} />
        </>) : null}
      </div>

      <div className='GuestInfo-diet'>
        <label htmlFor='diet'>Please let us know of any dietary restrictions so we can provide the best and safest catering possible! If none, leave blank. </label>
        <input type='text' id='diet' name='diet' value={formData.diet} onChange={setFormData} />
      </div>

      <div className='GuestInfo-email'>
        <p>Lastly, enter your email so we can send you updates if necessary and, of course, give you access to photos of the whole shindig after!</p>
        <label htmlFor='email'>Email: </label>
        <input required type='email' id='email' name='email' value={formData.email} onChange={setFormData} />
      </div>

      <button onClick={handleSetGuestInfo}>Next</button>
    </div>
  );
};

export default GuestInfo;