import React, { useContext } from 'react';
import FormContext from '../../../_utils/FormContext';

import './IsAttending.css';

const IsAttending = () => {
  const { guestInfo } = useContext(FormContext);
  const plusOneFirstName = guestInfo.plusOne.split(' ')[0];
  return (
    <article className='IsAttending'>
      <h3>You're in! We look forward to seeing you{plusOneFirstName ? ` and ${plusOneFirstName}` : ''} there!</h3>
      <p> If anything changes, you can come back to this site and refill the form by September 15th! The reception is taking place on October 22nd, 7pm, at...</p>

      <address>
        Jumel Terrace Books<br />
        426 W 160th st<br />
        New York, NY 10032
      </address>

      <p>Other things to note:</p>

      <ul>
        <li>This invite is for the reception. We have chosen to have a private ceremony.</li><br />
        <li>The dresscode is Roaring 20s themed cocktail attire with a modern spin!</li><br />
        <li>Lots of finger food will be provided and there will be an open bar with a bartender. Feel free to bring your own alcohol as well!</li>
      </ul>

      <p>Feel free to contact us with questions. Until then, if you'd like to purchase a gift for us, <a href="#registry">check out our registries!</a></p>
    </article>
  );
};

export default IsAttending;