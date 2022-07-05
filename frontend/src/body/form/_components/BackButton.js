import React, { useContext } from 'react';
import FormContext from '../../../_utils/FormContext';

import './BackButton.css';

const BackButton = () => {
  const { setPage } = useContext(FormContext);
  const goBack = () => setPage(page => --page);
  return (
    <button className='BackButton' onClick={goBack}>Back</button>
  );
};

export default BackButton;