import React, { useContext } from 'react';
import FormContext from '../../../_utils/FormContext';

import './IsAttending.css';

const IsAttending = () => {
  const { guestInfo } = useContext(FormContext);
  const plusOneFirstName = guestInfo.plusOne.split(' ')[0];
  return (
    <article className='IsAttending'>
      <p>You're in! We look forward to seeing you{plusOneFirstName ? ` and ${plusOneFirstName}` : ''} there! If anything changes, you can come back to this site and refill the form by September 15th! Please keep us in the loop as it helps with planning!</p>

      <p>The whole event is taking place on October 22nd, 6pm, at...</p>

      <address>
        Jumel Terrace Books<br />
        426 W 160th st<br />
        New York, NY 10032
      </address>

      <p>Other things to note:</p>

      <ul>
        <li>Reception begins immediately after the ceremony.</li>
        <li>Finger foods will be provided.</li>
        <li>There will be an open bar with bartenders and feel free to bring your own alcohol!</li>
        <li>Remember that the theme of the night is Roaring 20s so dress accordingly! Think Great Gatsby or Peaky Blinders and feel free to add a modern spin since we are also technically in the 20's right now!</li>
      </ul>

      <p>Feel free to contact us with questions. Until then, if you'd like to purchase a gift for us, check out our registries</p>
    </article>
  );
};

export default IsAttending;