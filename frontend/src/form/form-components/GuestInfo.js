import React, { useContext, useState } from 'react';
import Api from '../../api';
import useTextbox from '../../_hooks/useTextbox';
import GuestContext from '../../_utils/GuestContext';

const GuestInfo = () => {
  const { guestInfo, setGuestInfo, setPage } = useContext(GuestContext);
  const [hasPlusOne, setHasPlusOne] = useState(false);
  const [formData, setFormData] = useTextbox({
    plusOne: '',
    diet: '',
    email: ''
  });

  const handlePlusOne = e => setHasPlusOne(e.target.value);

  const handleSetGuestInfo = async e => {
    e.preventDefault();
    await Api.markComing({ ...guestInfo, ...formData });
    setGuestInfo(guest => ({ ...guest, ...formData }));
    setPage(3);
  };

  return (
    <div className='GuestInfo'>
      <p>Excellent! Before you finish, we just need a bit more information.</p>

      <div className='GuestInfo-plus-one'>
        <p>Do you plan to bring a plus-one?</p>
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
        <p>Please let us know of any dietary restrictions so we can provide the best and safest catering possible! If none, you may leave this section blank.</p>
        <label htmlFor='diet'>Diet restrictions: </label>
        <input type='text' id='diet' name='diet' value={formData.diet} onChange={setFormData} />
      </div>

      <div className='GuestInfo-email'>
        <p>Lastly, enter your email so we can send you updates if necessary and, of course, give you access to photos of the whole shindig after!</p>
        <label htmlFor='email'>Email: </label>
        <input type='email' id='email' name='email' value={formData.email} onChange={setFormData} />
      </div>

      <button onClick={handleSetGuestInfo}>Next</button>
    </div>
  )
}

export default GuestInfo