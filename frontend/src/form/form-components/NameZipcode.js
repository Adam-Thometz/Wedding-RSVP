import React, { useContext } from 'react';
import useTextbox from '../../_hooks/useTextbox';
import GuestContext from '../../_utils/GuestContext';

const NameZipcode = () => {
  const { setGuestInfo } = useContext(GuestContext);
  const [formData, setFormData] = useTextbox({
    firstName: '',
    lastName: '',
    zipcode: ''
  });

  const nextPage = () => setGuestInfo(formData);

  return (
    <div className='NameZipcode'>
      <p>Before we begin, please enter your first name, last name, and the zipcode where you received your invitation so we can find you on our guest list and weed out the wedding crashers!</p>
      <label htmlFor='firstName'>First Name</label>
      <input
        type='text'
        id='firstName'
        name='firstName'
        value={formData.firstame}
        onChange={setFormData}
      />
      
      <label htmlFor='lastName'>Last Name</label>
      <input
        type='text'
        id='lastName'
        name='lastName'
        value={formData.lastame}
        onChange={setFormData}
      />

      <label htmlFor='zipcode'>Zipcode</label>
      <input
        type='text'
        id='zipcode'
        name='zipcode'
        value={formData.zipcode}
        onChange={setFormData}
      />
      <button onClick={nextPage}>Next</button>
    </div>
  );
};

export default NameZipcode;