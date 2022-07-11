import React, { useContext } from 'react';
import FormContext from '../../../_utils/FormContext';

import './IsAttending.css';

const IsAttending = () => {
  const { guestInfo } = useContext(FormContext);
  const plusOneFirstName = guestInfo.plusOne.split(' ')[0];
  return (
    <article className='IsAttending'>
      <p>You're in! We look forward to seeing you{plusOneFirstName ? ` and ${plusOneFirstName}` : ''} there! If anything changes, you can come back to this site and refill the form by September 15th!</p>

      <p>The whole event is taking place on October 22nd, 6pm, at...</p>

      <address>
        Jumel Terrace Books<br />
        426 W 160th st<br />
        New York, NY 10032
      </address>

      <p>Other things to note:</p>

      <ul>
        <li>Ceremony location may change if the weather isn't cooperating. Our backup location is across the street!</li>
        <li>Finger foods will be provided.</li>
        <li>There will be an open bar with a bartender and feel free to bring your own!</li>
        <li>The theme of the night is Roaring 20s so dress accordingly! Think Great Gatsby or Peaky Blinders. You may add a modern spin since we're also in the 20's!</li>
      </ul>

      <p>Feel free to contact us with questions. Until then, if you'd like to purchase a gift for us, <a href="#registry">check out our registries</a></p>
    </article>
  );
};

export default IsAttending;